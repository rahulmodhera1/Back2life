"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Globe } from "@/components/Globe";
import { InkWordmark } from "@/components/InkWordmark";
import { StudiosWordmark } from "@/components/StudiosWordmark";

type Side = "barber" | "ink";

const EXIT_MS = 650;

/**
 * Decorative spring parallax: the panel's logo drifts a few pixels toward the
 * cursor with real momentum. Purely an enhancement — inert on touch and for
 * reduced-motion users.
 */
function useLogoParallax(disabled: boolean) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 16 });
  const springY = useSpring(y, { stiffness: 60, damping: 16 });

  const onMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * 18);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * 14);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return { springX, springY, onMouseMove, reset };
}

/**
 * The landing "splitter": a full-viewport door carrying the two official
 * logos. Hovering a half widens it, lifts its photo out of the dark, and the
 * logo floats on spring physics; choosing a side swings that panel open to
 * fill the screen before routing. Both halves are real links — keyboard and
 * reduced-motion users navigate instantly.
 */
export function SplitLanding() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<Side | null>(null);
  const [exiting, setExiting] = useState<Side | null>(null);
  const navigated = useRef(false);
  const barberParallax = useLogoParallax(!!reduceMotion || !!exiting);
  const inkParallax = useLogoParallax(!!reduceMotion || !!exiting);

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

  // Master brand chrome recedes while the visitor weighs a side, and leaves
  // with the door.
  const chromeClass = exiting
    ? "opacity-0"
    : hovered
      ? "opacity-40"
      : "opacity-100";

  const enterCue = (
    <span className="mt-3 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 transition-colors duration-300 group-hover:text-gold">
      <span className="h-px w-8 bg-white/30 transition-colors duration-300 group-hover:bg-gold" />
      Enter
      <ArrowRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
        aria-hidden="true"
      />
    </span>
  );

  return (
    <main className="grain relative flex h-dvh flex-col overflow-hidden bg-black md:flex-row">
      <h1 className="sr-only">Back2Life — barbershop and tattoo studio</h1>

      {/* Studios / barber half */}
      <Link
        href="/barber"
        aria-label="Enter Back2Life Studios — the barbershop"
        onClick={choose("barber")}
        onMouseEnter={() => setHovered("barber")}
        onMouseLeave={() => {
          setHovered(null);
          barberParallax.reset();
        }}
        onMouseMove={barberParallax.onMouseMove}
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
          <motion.span
            className="flex flex-col items-center gap-4"
            style={{ x: barberParallax.springX, y: barberParallax.springY }}
          >
            <StudiosWordmark widthClassName="w-[64vw] max-w-[340px] md:w-[30vw] md:max-w-[420px]" priority glow />
            <span className="text-xs font-semibold uppercase tracking-[0.6em] text-white/90">
              Studios
            </span>
          </motion.span>
          <p className="max-w-xs text-sm text-white/70">
            Cuts that bring you back.
          </p>
          {enterCue}
        </div>
      </Link>

      {/* Seam hairline — a fine gold thread joining the two crafts */}
      <div
        aria-hidden="true"
        className={`pointer-events-none z-20 h-px w-full flex-none bg-gold-dim transition-opacity duration-500 md:h-auto md:w-px md:self-stretch ${
          exiting ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Master brand — top edge, clear of the moving seam */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-center gap-5 pt-7 transition-opacity duration-500 md:pt-9 ${chromeClass}`}
      >
        <span className="h-px w-10 bg-gold-dim md:w-16" />
        <span className="display text-lg tracking-[0.08em] text-white md:text-xl">
          Back2Life
        </span>
        <span className="h-px w-10 bg-gold-dim md:w-16" />
      </div>

      {/* Tagline — bottom edge */}
      <p
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 pb-7 text-[11px] font-medium uppercase tracking-[0.35em] text-white/60 transition-opacity duration-500 md:pb-9 ${chromeClass}`}
      >
        One brand
        <span className="inline-block size-1 rotate-45 bg-gold" />
        Two crafts
        <span className="inline-block size-1 rotate-45 bg-gold" />
        Pick your side
      </p>

      {/* Ink / tattoo half */}
      <Link
        href="/ink"
        aria-label="Enter Back2Life Ink — the tattoo studio"
        onClick={choose("ink")}
        onMouseEnter={() => setHovered("ink")}
        onMouseLeave={() => {
          setHovered(null);
          inkParallax.reset();
        }}
        onMouseMove={inkParallax.onMouseMove}
        onFocus={() => setHovered("ink")}
        onBlur={() => setHovered(null)}
        style={panelStyle("ink")}
        className="group relative min-h-0 flex-1 overflow-hidden outline-offset-[-4px]"
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
          <motion.span
            style={{ x: inkParallax.springX, y: inkParallax.springY }}
          >
            <InkWordmark widthClassName="w-[58vw] max-w-[300px] md:w-[24vw] md:max-w-[380px]" priority glow />
          </motion.span>
          <p className="mt-1 max-w-xs text-sm text-white/70">
            Ink for your next chapter.
          </p>
          {enterCue}
        </div>
      </Link>
    </main>
  );
}
