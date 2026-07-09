import Link from "next/link";
import { InstagramIcon } from "@/components/InstagramIcon";
import { StudiosWordmark } from "@/components/StudiosWordmark";
import { ADDRESS, INSTAGRAM_INK, INSTAGRAM_STUDIOS } from "@/data/site";

/** Shared footer: master brand, both Instagrams, both verticals. */
export function Footer() {
  return (
    <footer className="border-t border-hairline bg-black">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <StudiosWordmark widthClassName="w-44" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mid">
              One brand, two crafts. Grooming that resets you, ink that marks a
              new chapter.
            </p>
          </div>

          <nav aria-label="Verticals" className="flex flex-col gap-3 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Visit</p>
            <Link href="/barber" className="text-white transition-opacity duration-200 hover:opacity-70">
              Back2Life Studios — Barbershop
            </Link>
            <Link href="/ink" className="text-white transition-opacity duration-200 hover:opacity-70">
              Back2Life Ink — Tattoo Studio
            </Link>
            <Link href="/" className="text-mid transition-colors duration-200 hover:text-gold">
              ← Entrance — pick your side
            </Link>
            <p className="mt-2 text-mid">
              {ADDRESS.line1}, {ADDRESS.line2}
            </p>
          </nav>

          <nav aria-label="Social" className="flex flex-col gap-3 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Follow</p>
            <a
              href={INSTAGRAM_STUDIOS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white transition-opacity duration-200 hover:opacity-70"
            >
              <InstagramIcon className="size-4" aria-hidden="true" />
              @back2lifestudios
            </a>
            <a
              href={INSTAGRAM_INK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white transition-opacity duration-200 hover:opacity-70"
            >
              <InstagramIcon className="size-4" aria-hidden="true" />
              @back2lifeink
            </a>
          </nav>
        </div>

        <p className="mt-12 border-t border-hairline pt-6 text-xs text-mid">
          © {new Date().getFullYear()} Back2Life. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
