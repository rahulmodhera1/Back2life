import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { CtaLink } from "@/components/CtaLink";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { InkWordmark } from "@/components/InkWordmark";
import { Nav } from "@/components/Nav";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Reveal } from "@/components/Reveal";
import { ARTISTS, FAQS, INK_PORTFOLIO, PROCESS } from "@/data/ink";
import { CONSULT_URL, INSTAGRAM_INK } from "@/data/site";

export const metadata: Metadata = {
  title: "Back2Life Ink — Tattoo Studio",
  description:
    "Back2Life Ink: fine line, black & grey, realism, and traditional tattooing. Book a consultation and mark your next chapter.",
  openGraph: {
    title: "Back2Life Ink — Tattoo Studio",
    description: "Ink for your next chapter. Book a consultation at Back2Life Ink.",
    images: [{ url: "/photos/ink-hero.jpg", width: 1600, height: 1067 }],
  },
};

export default function InkPage() {
  return (
    <div className="grain grain-ink bg-black">
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-dvh items-center overflow-hidden">
        <Image
          src="/photos/ink-hero.jpg"
          alt="Inside the Back2Life Ink tattoo studio"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.4]"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-20 pt-32 text-center md:px-10">
          <Reveal className="flex flex-col items-center">
            <h1>
              <span className="sr-only">Back2Life Ink</span>
              <InkWordmark sizeClassName="text-6xl md:text-8xl" />
            </h1>
            <p className="mt-8 max-w-md text-lg text-white/80">
              Every piece marks a chapter. Fine line, black &amp; grey, realism,
              and traditional — done once, done right.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CtaLink href={CONSULT_URL} external>
                Book a Consultation
              </CtaLink>
              <CtaLink href={INSTAGRAM_INK} external variant="outline">
                <InstagramIcon className="size-4" aria-hidden="true" />
                @back2lifeink
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portfolio */}
      <section aria-labelledby="portfolio-heading">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <Reveal className="flex flex-col items-center text-center">
            <h2
              id="portfolio-heading"
              className="ink-rule blackletter text-5xl md:text-6xl"
            >
              The Work
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/70">
              A cut of what leaves the studio. Tap any piece to look closer.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <PortfolioGrid images={INK_PORTFOLIO} />
          </Reveal>
          <Reveal className="mt-10 text-center">
            <a
              href={INSTAGRAM_INK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors duration-200 hover:text-white"
            >
              <InstagramIcon className="size-4" aria-hidden="true" />
              More on Instagram
            </a>
          </Reveal>
        </div>
      </section>

      {/* Artists */}
      <section aria-labelledby="artists-heading" className="border-t border-hairline bg-near-black">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <Reveal className="flex justify-center">
            <h2 id="artists-heading" className="ink-rule blackletter text-5xl md:text-6xl">
              The Artists
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
            {ARTISTS.map((artist, index) => (
              <Reveal as="li" key={artist.name} delay={index * 0.06} className="h-full bg-black">
                  <a
                    href={artist.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-surface"
                  >
                    <span className="blackletter text-4xl">{artist.name}</span>
                    <span className="mt-3 text-sm text-white/70">{artist.specialty}</span>
                    <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-mid transition-colors duration-200 group-hover:text-white">
                      View work
                      <ArrowUpRight
                        className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process — a real sequence, so the numbers carry meaning */}
      <section aria-labelledby="process-heading">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <Reveal className="flex justify-center">
            <h2 id="process-heading" className="ink-rule blackletter text-5xl md:text-6xl">
              The Process
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 0.06}
                className="border-t border-hairline pt-6"
              >
                  <p className="text-xs font-semibold tabular-nums text-mid">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-bold uppercase tracking-[0.1em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{step.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="border-t border-hairline bg-near-black">
        <div className="mx-auto max-w-3xl px-5 py-24 md:px-10 md:py-32">
          <Reveal className="flex justify-center">
            <h2 id="faq-heading" className="ink-rule blackletter text-5xl md:text-6xl">
              Questions
            </h2>
          </Reveal>
          <Reveal className="mt-12">
            <Faq items={FAQS} />
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-hairline">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-24 text-center md:px-10 md:py-32">
          <h2 className="blackletter text-6xl md:text-7xl">Start your next chapter</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaLink href={CONSULT_URL} external>
              Book a Consultation
            </CtaLink>
            <CtaLink href={INSTAGRAM_INK} external variant="outline">
              <InstagramIcon className="size-4" aria-hidden="true" />
              Follow @back2lifeink
            </CtaLink>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
