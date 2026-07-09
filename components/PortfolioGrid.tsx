"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/data/barber";

type PortfolioGridProps = {
  images: GalleryImage[];
};

/**
 * Masonry portfolio with a lightbox — the heart of the Ink page. Consumes the
 * GalleryImage shape only, so a live feed could replace the data source
 * without touching this component.
 */
export function PortfolioGrid({ images }: PortfolioGridProps) {
  const [open, setOpen] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  // SSR-safe portal target: document only exists on the client.
  const portalTarget = typeof document !== "undefined" ? document.body : null;

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpen((current) =>
        current === null ? null : (current + delta + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <ul className="columns-2 gap-1.5 md:columns-3 [&>li]:mb-1.5">
        {images.map((image, index) => (
          <li key={image.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpen(index)}
              aria-label={`Open ${image.alt} in lightbox`}
              className="group pressable block w-full overflow-hidden bg-surface"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-[transform,filter] duration-500 [transition-timing-function:var(--ease-out-strong)] group-hover:scale-[1.04] group-hover:brightness-110"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Portal escapes the scroll-reveal wrapper's transform, which would
          otherwise trap this fixed overlay in its stacking context. */}
      {portalTarget &&
        createPortal(
          <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={images[open].alt}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4 md:p-10"
            initial={{ opacity: reduceMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: reduceMotion ? 1 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={close}
          >
            <motion.div
              key={images[open].src}
              className="relative max-h-full"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={images[open].src}
                alt={images[open].alt}
                width={images[open].width}
                height={images[open].height}
                sizes="90vw"
                className="max-h-[85dvh] w-auto object-contain"
                priority
              />
              <p className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-mid">
                {open + 1} / {images.length}
              </p>
            </motion.div>

            <button
              type="button"
              onClick={close}
              aria-label="Close lightbox"
              className="pressable absolute right-4 top-4 border border-white/30 p-2 text-white transition-colors duration-200 hover:bg-white hover:text-black"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="pressable absolute left-2 top-1/2 -translate-y-1/2 border border-white/30 p-2 text-white transition-colors duration-200 hover:bg-white hover:text-black md:left-6"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="pressable absolute right-2 top-1/2 -translate-y-1/2 border border-white/30 p-2 text-white transition-colors duration-200 hover:bg-white hover:text-black md:right-6"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
