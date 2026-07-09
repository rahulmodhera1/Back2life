"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Globe } from "@/components/Globe";
import { InkWordmark } from "@/components/InkWordmark";

type Side = "barber" | "ink";

const EXIT_MS = 650;

/**
 * The landing "splitter": a full-viewport door. Hovering a half widens it and
 * lifts its photo out of the dark; choosing a side swings that panel open to
 * fill the screen before routing. Both halves are real links — keyboard and
 * reduced-motion users navigate instantly.
 */
export function SplitLanding() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<Side | null>(null);
  const [exiting, setExiting] = useState<Side | null>(null);
  const navigated = useRef(false);

  const choose = useCallback(
    (side: Side) => (event: React.MouseEvent) => {
      if (navigated.current) {
        event.preventDefault();
        return;
      }
      if (reduceMotion) return; // let the plain link navigation happen
      event.preventDefault();
      navigated.current = true;
      setExiting(side);
      window.setTimeout(() => router.push(`/${side}`), EXIT_MS);
    },
    [reduceMotion, router],
  );

  const grow = (side: Side) => {
    if (exiting) return exiting === side ? 20 : 0.0001;
    if (hovered) return hovered === side ? 1.5 : 1;
    return 1;
  };

  const imageFilter = (side: Side) => {
    const lifted = hovered === side || exiting === side;
    const dimmed = (hovered && hovered !== side) || (exiting && exiting !== side);
    if (lifted) return "grayscale(1) brightness(0.85) contrast(1.1)";
    if (dimmed) return "grayscale(1) brightness(0.25)";
    return "grayscale(1) brightness(0.55)";
  };

  const panelStyle = (side: Side): React.CSSProperties => ({
    flexGrow: grow(side),
    flexBasis: 0,
    transition: `flex-grow ${exiting ? EXIT_MS : 700}ms var(--ease-door)`,
  });

  const contentClass = (side: Side) =>
    `relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center transition-opacity duration-500 ${
      exiting && exiting !== side ? "opacity-0" : "opacity-100"
    }`;

  return (
    <main className="grain relative flex h-dvh flex-col overflow-hidden bg-black md:flex-row">
      <h1 className="sr-only">Back2Life — barbershop and tattoo studio</h1>

      {/* Studios / barber half */}
      <Link
        href="/barber"
        aria-label="Enter Back2Life Studios — the barbershop"
        onClick={choose("barber")}
        onMouseEnter={() => setHovered("barber")}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered("barber")}
        onBlur={() => setHovered(null)}
        style={panelStyle("barber")}
        className="group relative min-h-0 flex-1 overflow-hidden outline-offset-[-4px]"
      >
        <Image
          src="/photos/split-barber.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-[filter,transform] duration-700 group-hover:scale-[1.04]"
          style={{ filter: imageFilter("barber"), transitionTimingFunction: "var(--ease-door)" }}
        />
        <Globe
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[130%] max-w-none -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.13] transition-opacity duration-700 group-hover:opacity-25 md:w-[90%]"
          strokeWidth={0.4}
        />
        <div className={contentClass("barber")}>
          <span className="display text-[13vw] leading-none md:text-[6.5vw]">
            Back2Life
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.6em] text-white/90">
            Studios
          </span>
          <p className="max-w-xs text-sm text-white/70">
            Cuts that bring you back.
          </p>
          <span className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 transition-colors duration-300 group-hover:text-white">
            Enter
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>

      {/* Center seam: master brand mark */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-2 px-4 transition-opacity duration-300 ${
          exiting ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="display bg-black px-4 py-1.5 text-xl tracking-tight md:text-2xl">
          Back2Life
        </span>
        <span className="bg-black px-3 py-1 text-[11px] font-medium uppercase tracking-[0.3em] text-white/80">
          One brand. Two crafts. Pick your side.
        </span>
      </div>

      {/* Ink / tattoo half */}
      <Link
        href="/ink"
        aria-label="Enter Back2Life Ink — the tattoo studio"
        onClick={choose("ink")}
        onMouseEnter={() => setHovered("ink")}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered("ink")}
        onBlur={() => setHovered(null)}
        style={panelStyle("ink")}
        className="group relative min-h-0 flex-1 overflow-hidden border-t border-white/15 outline-offset-[-4px] md:border-l md:border-t-0"
      >
        <Image
          src="/photos/split-ink.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-[filter,transform] duration-700 group-hover:scale-[1.04]"
          style={{ filter: imageFilter("ink"), transitionTimingFunction: "var(--ease-door)" }}
        />
        <div className={contentClass("ink")}>
          <InkWordmark sizeClassName="text-[13vw] md:text-[5.5vw]" />
          <p className="mt-1 max-w-xs text-sm text-white/70">
            Ink for your next chapter.
          </p>
          <span className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 transition-colors duration-300 group-hover:text-white">
            Enter
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </main>
  );
}
