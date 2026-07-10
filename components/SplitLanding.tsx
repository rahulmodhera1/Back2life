"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldRule } from "@/components/GoldRule";
import { useVerticalTransition } from "@/components/TransitionProvider";

type Side = "barber" | "ink";

const SIDES: Array<{ href: string; side: Side; label: string; sub: string }> = [
  { href: "/barber", side: "barber", label: "Back2Life Studios", sub: "Barbershop" },
  { href: "/ink", side: "ink", label: "Back2Life Ink", sub: "Tattoo Studio" },
];

/** The entrance: the Back2Life name, and a choice between its two sides. */
export function SplitLanding() {
  const transition = useVerticalTransition();

  return (
    <main className="grain relative flex min-h-dvh flex-col items-center justify-center bg-black px-6 py-24 text-center">
      <Reveal className="flex flex-col items-center">
        <h1 className="display text-6xl text-white sm:text-7xl md:text-8xl">
          Back2Life
        </h1>
        <GoldRule className="mt-6 w-16" origin="center" />

        <div className="mt-12 flex w-full max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
          {SIDES.map(({ href, side, label, sub }) => (
            <Link
              key={href}
              href={href}
              onClick={(event) => {
                if (transition) {
                  event.preventDefault();
                  transition.navigate(href, side);
                }
              }}
              aria-label={`Enter ${label} — the ${sub.toLowerCase()}`}
              className="pressable group inline-flex flex-1 flex-col items-center justify-center gap-1 border border-white/40 px-8 py-5 transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em]">
                {label}
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-white/50 group-hover:text-gold/70">
                {sub}
              </span>
            </Link>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
