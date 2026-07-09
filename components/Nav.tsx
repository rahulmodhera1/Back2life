"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/barber", label: "Studios", full: "Back2Life Studios — Barbershop" },
  { href: "/ink", label: "Ink", full: "Back2Life Ink — Tattoo Studio" },
] as const;

/**
 * Minimal fixed nav: the master wordmark home link and a switch between the
 * two verticals, visible from anywhere.
 */
export function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="flex items-center justify-between px-5 py-4 md:px-10"
      >
        <Link
          href="/"
          className="display text-lg tracking-tight text-white transition-opacity duration-200 hover:opacity-70"
        >
          Back2Life
        </Link>
        <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black/50 p-1 backdrop-blur-sm">
          {LINKS.map(({ href, label, full }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-label={full}
                aria-current={active ? "page" : undefined}
                className={`pressable rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-200 ${
                  active
                    ? "bg-white text-black"
                    : "text-white hover:text-gold"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
