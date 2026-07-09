"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useVerticalTransition } from "@/components/TransitionProvider";
import { BOOKING_URL, CONSULT_URL } from "@/data/site";

const SWITCH = [
  { href: "/barber", label: "Studios", full: "Back2Life Studios — Barbershop" },
  { href: "/ink", label: "Ink", full: "Back2Life Ink — Tattoo Studio" },
] as const;

/** In-page section anchors per vertical (desktop only). */
const ANCHORS: Record<string, Array<{ href: string; label: string }>> = {
  "/barber": [
    { href: "/barber#services", label: "Services" },
    { href: "/barber#work", label: "Work" },
    { href: "/barber#team", label: "Team" },
    { href: "/barber#visit", label: "Visit" },
  ],
  "/ink": [
    { href: "/ink#work", label: "Work" },
    { href: "/ink#artists", label: "Artists" },
    { href: "/ink#process", label: "Process" },
    { href: "/ink#faq", label: "FAQ" },
  ],
};

/**
 * Fixed nav shared by both verticals: a back link to the entrance splitter on
 * the left (so either side can return and pick the other), section anchors,
 * the Studios/Ink switch, and the vertical's booking CTA.
 */
export function Nav() {
  const pathname = usePathname();
  const transition = useVerticalTransition();
  const onBarber = pathname.startsWith("/barber");
  const anchors = ANCHORS[onBarber ? "/barber" : "/ink"] ?? [];
  const bookHref = onBarber ? BOOKING_URL : CONSULT_URL;
  const bookLabel = onBarber ? "Book a Cut" : "Book Now";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <nav
        aria-label="Primary"
        className="flex items-center justify-between gap-4 px-5 py-4 md:px-10"
      >
        <Link
          href="/"
          aria-label="Back to the Back2Life entrance — choose barbershop or tattoo"
          className="group inline-flex items-center gap-2.5 text-white transition-colors duration-200 hover:text-gold"
        >
          <ArrowLeft
            className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
          <span className="display text-lg tracking-tight">Back2Life</span>
        </Link>

        <div className="flex items-center gap-2 md:gap-5">
          <div className="hidden items-center gap-5 lg:flex" role="list">
            {anchors.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors duration-200 hover:text-gold"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black/50 p-1 backdrop-blur-sm">
            {SWITCH.map(({ href, label, full }) => {
              const active = pathname.startsWith(href);
              const side = href === "/barber" ? "barber" : "ink";
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={(event) => {
                    if (transition && !active) {
                      event.preventDefault();
                      transition.navigate(href, side);
                    }
                  }}
                  aria-label={full}
                  aria-current={active ? "page" : undefined}
                  className={`pressable rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-200 ${
                    active ? "bg-white text-black" : "text-white hover:text-gold"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <a
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="pressable hidden rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-black transition-colors duration-200 hover:bg-gold sm:inline-flex"
          >
            {bookLabel}
          </a>
        </div>
      </nav>
    </header>
  );
}
