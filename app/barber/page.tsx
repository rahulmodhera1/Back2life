import type { Metadata } from "next";
import Image from "next/image";
import { ChevronDown, MapPin, Star } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { GoldRule } from "@/components/GoldRule";
import { StudiosWordmark } from "@/components/StudiosWordmark";
import { WordmarkReveal } from "@/components/WordmarkReveal";
import { CtaLink } from "@/components/CtaLink";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Globe } from "@/components/Globe";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { BARBER_GALLERY, REVIEWS, SERVICES, SERVICE_NOTE, TEAM } from "@/data/barber";
import { ADDRESS, BOOKING_URL, HOURS, INSTAGRAM_STUDIOS } from "@/data/site";

export const metadata: Metadata = {
  title: "Back2Life Studios — Barbershop",
  description:
    "Back2Life Studios: precision cuts, skin fades, beard work, and hot towel shaves. Book a cut and come back to life.",
  openGraph: {
    title: "Back2Life Studios — Barbershop",
    description: "Cuts that bring you back. Book a cut at Back2Life Studios.",
    images: [{ url: "/logos/og-studios.jpg", width: 983, height: 983 }],
  },
};

const MARQUEE_ITEMS = ["Haircuts", "Beards", "Fades", "Line-Ups"];

/** Services ticker, with the official wordmark stamped between passes. */
function MarqueeStrip() {
  const row = (
    <div className="marquee-track" aria-hidden="true">
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-10">
          <span className="display text-2xl text-white/90 md:text-3xl">{item}</span>
          <span className="size-1.5 rotate-45 bg-gold" />
        </span>
      ))}
      <span className="flex items-center gap-10">
        <StudiosWordmark widthClassName="w-36 md:w-44" className="opacity-90" />
        <span className="size-1.5 rotate-45 bg-gold" />
      </span>
    </div>
  );
  return (
    <div className="marquee border-y border-hairline bg-black py-5" role="presentation">
      {row}
      {row}
      {row}
    </div>
  );
}

export default function BarberPage() {
  return (
    <div className="grain grain-studios bg-near-black">
      <Nav />

      {/* Hero — full screen, centered lockup */}
      <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden text-center">
        <Image
          src="/photos/barber-hero.jpg"
          alt="Inside the Back2Life Studios barbershop"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.45]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 md:w-[55%]"
        >
          <Globe className="globe-spin w-full text-white opacity-10" strokeWidth={0.35} />
        </div>
        <div className="relative z-10 flex flex-col items-center px-5 pb-24 pt-28">
          <Reveal className="flex flex-col items-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.5em] text-gold">
              Barbershop
            </p>
            <h1 className="mt-6">
              <span className="sr-only">Back2Life Studios</span>
              <WordmarkReveal variant="wipe" delay={0.15}>
                <StudiosWordmark
                  widthClassName="w-[82vw] max-w-[760px]"
                  priority
                  glow
                />
              </WordmarkReveal>
            </h1>
            <p className="mt-5 flex items-center gap-5 text-[4.5vw] font-semibold uppercase tracking-[0.55em] text-white/90 md:text-2xl">
              <span aria-hidden="true" className="h-px w-10 bg-gold-dim md:w-14" />
              Studios
              <span aria-hidden="true" className="h-px w-10 bg-gold-dim md:w-14" />
            </p>
            <GoldRule className="mt-7 w-24" origin="center" delay={0.9} />
            <p className="mt-7 max-w-md text-base text-white/75 md:text-lg">
              Precision cuts, sharp fades, and shaves done properly. Sit down,
              switch off, come back to life.
            </p>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.3em] text-white/60">
              {ADDRESS.line1} · {ADDRESS.line2}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <CtaLink href={BOOKING_URL} external>
                Book a Cut
              </CtaLink>
              <CtaLink href={INSTAGRAM_STUDIOS} external variant="outline">
                <InstagramIcon className="size-4" aria-hidden="true" />
                @back2lifestudios
              </CtaLink>
            </div>
          </Reveal>
        </div>
        <a
          href="#services"
          aria-label="Scroll to services"
          className="absolute bottom-7 z-10 flex flex-col items-center gap-1 text-white/60 transition-colors duration-200 hover:text-gold"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
            Explore
          </span>
          <ChevronDown className="size-4 animate-bounce" aria-hidden="true" />
        </a>
      </section>

      <MarqueeStrip />

      {/* Intro statement */}
      <section aria-label="About the studio" className="relative overflow-hidden">
        <Globe
          className="pointer-events-none absolute -right-[25%] top-1/2 w-[60%] -translate-y-1/2 text-white opacity-[0.05]"
          strokeWidth={0.3}
        />
        <Reveal className="mx-auto max-w-3xl px-5 py-24 text-center md:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.5em] text-gold">
            The Studio
          </p>
          <p className="display mt-6 text-3xl leading-tight md:text-5xl">
            More than a haircut — a reset. Walk in carrying the week, walk out
            brand new.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
            Back2Life Studios is built on craft and consistency: unhurried
            appointments, barbers who listen, and finishes that hold their
            shape long after you leave the chair.
          </p>
          <GoldRule className="mx-auto mt-10 w-16" origin="center" />
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 bg-black">
        <div className="mx-auto max-w-5xl px-5 py-24 md:px-10 md:py-32">
          <Reveal className="flex flex-col items-center text-center">
            <h2 id="services-heading" className="display text-5xl md:text-7xl">
              The Craft
            </h2>
            <GoldRule className="mt-6 w-16" origin="center" />
            <p className="mt-5 max-w-md text-sm text-white/60">{SERVICE_NOTE}</p>
          </Reveal>
          <ul className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            {SERVICES.map((service, index) => (
              <Reveal
                as="li"
                from={index % 2 === 0 ? "left" : "right"}
                key={service.name}
                delay={index * 0.08}
                className="group"
              >
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable flex h-full flex-col border border-hairline bg-near-black p-8 transition-colors duration-300 hover:border-gold/50 md:p-10"
                >
                  <h3 className="display text-3xl md:text-4xl">{service.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                    {service.description}
                  </p>
                  <p className="mt-8 flex items-baseline gap-3">
                    <span className="display text-5xl text-gold">{service.price}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mid">
                      {service.duration}
                    </span>
                  </p>
                  <span className="mt-7 inline-flex items-center gap-3 border-t border-hairline pt-5 text-xs font-bold uppercase tracking-[0.25em] text-white/80 transition-colors duration-200 group-hover:text-gold">
                    Book this service
                    <span
                      aria-hidden="true"
                      className="h-px w-6 bg-white/40 transition-colors duration-200 group-hover:bg-gold"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section id="work" aria-labelledby="gallery-heading" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal from="left">
              <h2 id="gallery-heading" className="gold-tick display text-5xl md:text-7xl">
                Fresh Work
              </h2>
            </Reveal>
            <Reveal from="right">
            <a
              href={INSTAGRAM_STUDIOS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors duration-200 hover:text-gold"
            >
              <InstagramIcon className="size-4" aria-hidden="true" />
              Follow on Instagram
            </a>
            </Reveal>
          </div>
          <Reveal className="mt-12">
            <GalleryGrid images={BARBER_GALLERY} />
          </Reveal>
        </div>
      </section>

      {/* Team — portrait cards, each bookable */}
      <section id="team" aria-labelledby="team-heading" className="scroll-mt-20 bg-black">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 id="team-heading" className="gold-tick display text-5xl md:text-7xl">
              The Chairs
            </h2>
          </Reveal>
          <ul className="mt-14 flex flex-wrap justify-center gap-8">
            {TEAM.map((member, index) => (
              <Reveal as="li" key={member.name} delay={index * 0.06} className="group w-full max-w-sm">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Back2Life Studios`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 [transition-timing-function:var(--ease-out-strong)] group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 border border-gold/0 transition-[border-color] duration-300 group-hover:border-gold/60"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="display text-2xl">{member.name}</h3>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                      {member.role}
                    </p>
                    <p className="mt-2 text-sm text-white/65">{member.specialty}</p>
                  </div>
                  <a
                    href={member.bookUrl ?? BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pressable mt-1 flex-none border border-white/30 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:border-gold hover:text-gold"
                  >
                    Book
                  </a>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews */}
      <section aria-labelledby="reviews-heading" className="relative overflow-hidden">
        {/* Ghost wordmark watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 w-[140%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.035] md:w-[90%]"
        >
          <StudiosWordmark widthClassName="w-full" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <Reveal className="text-center">
            <h2 id="reviews-heading" className="display text-5xl md:text-7xl">
              Word of Mouth
            </h2>
            <p
              className="mt-4 inline-flex items-center gap-1.5"
              aria-label="Rated five stars by clients"
            >
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-4 fill-gold text-gold" aria-hidden="true" />
              ))}
            </p>
            <p className="mt-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60 transition-colors duration-200 hover:text-gold"
              >
                Rated 5.0 on Booksy
              </a>
            </p>
          </Reveal>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {REVIEWS.map((review, index) => (
              <Reveal
                as="li"
                key={review.author}
                delay={index * 0.06}
                className="flex flex-col border-t border-hairline pt-6"
              >
                <blockquote className="text-sm leading-relaxed text-white/75">
                  “{review.quote}”
                </blockquote>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  {review.author}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Hours & Location */}
      <section id="visit" aria-labelledby="hours-heading" className="scroll-mt-20 bg-black">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 id="hours-heading" className="gold-tick display text-5xl md:text-7xl">
              Find Us
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <Reveal from="left">
              <table className="w-full text-sm">
                <caption className="sr-only">Opening hours</caption>
                <tbody className="divide-y divide-hairline border-y border-hairline">
                  {HOURS.map((row) => (
                    <tr key={row.day}>
                      <th scope="row" className="py-3 text-left font-semibold">
                        {row.day}
                      </th>
                      <td
                        className={`py-3 text-right tabular-nums ${
                          row.hours === "Closed" ? "text-mid" : "text-white"
                        }`}
                      >
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-5 text-sm text-white/60">
                Walk-ins welcome when a chair is free — booking guarantees your
                slot.
              </p>
            </Reveal>
            <Reveal from="right" delay={0.08}>
              <address className="text-lg not-italic text-white/85">
                {ADDRESS.line1}
                <br />
                {ADDRESS.line2}
              </address>
              {/* Map placeholder — swap for a real embed later */}
              <div
                aria-hidden="true"
                className="mt-6 flex aspect-video items-center justify-center border border-hairline bg-surface text-xs uppercase tracking-[0.3em] text-mid"
              >
                Map
              </div>
              <a
                href={ADDRESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:text-gold"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Get Directions
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden border-t border-hairline">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 md:w-[60%]"
        >
          <Globe className="globe-spin w-full text-white opacity-[0.06]" strokeWidth={0.3} />
        </div>
        <Reveal className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-24 text-center md:px-10 md:py-32">
          <GoldRule className="w-16" origin="center" />
          <h2 className="display text-6xl md:text-8xl">Come back to life</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaLink href={BOOKING_URL} external>
              Book a Cut
            </CtaLink>
            <CtaLink href={INSTAGRAM_STUDIOS} external variant="outline">
              <InstagramIcon className="size-4" aria-hidden="true" />
              Follow @back2lifestudios
            </CtaLink>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
