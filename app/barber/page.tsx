import type { Metadata } from "next";
import Image from "next/image";
import { ChevronDown, MapPin, Star } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { CtaLink } from "@/components/CtaLink";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Globe } from "@/components/Globe";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { BARBER_GALLERY, REVIEWS, SERVICES, TEAM } from "@/data/barber";
import { ADDRESS, BOOKING_URL, HOURS, INSTAGRAM_STUDIOS } from "@/data/site";

export const metadata: Metadata = {
  title: "Back2Life Studios — Barbershop",
  description:
    "Back2Life Studios: precision cuts, skin fades, beard work, and hot towel shaves. Book a cut and come back to life.",
  openGraph: {
    title: "Back2Life Studios — Barbershop",
    description: "Cuts that bring you back. Book a cut at Back2Life Studios.",
    images: [{ url: "/photos/barber-hero.jpg", width: 1600, height: 1067 }],
  },
};

const MARQUEE_ITEMS = ["Cuts", "Fades", "Beards", "Hot Towel Shaves", "Kids Cuts"];

function MarqueeStrip() {
  const row = (
    <div className="marquee-track" aria-hidden="true">
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-10">
          <span className="display text-2xl text-white/90 md:text-3xl">{item}</span>
          <span className="size-1.5 rotate-45 bg-gold" />
        </span>
      ))}
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
        <Globe
          className="pointer-events-none absolute left-1/2 top-1/2 w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 text-white opacity-10 md:w-[55%]"
          strokeWidth={0.35}
        />
        <div className="relative z-10 flex flex-col items-center px-5 pb-24 pt-28">
          <Reveal className="flex flex-col items-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.5em] text-gold">
              Barbershop
            </p>
            <h1 className="display mt-4 text-[18vw] leading-none md:text-[10rem]">
              Back2Life
            </h1>
            <p className="mt-3 text-[4.5vw] font-semibold uppercase tracking-[0.55em] text-white/90 md:text-2xl">
              Studios
            </p>
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
        </Reveal>
      </section>

      {/* Services */}
      <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 bg-black">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="services-heading" className="gold-tick display text-5xl md:text-7xl">
              The Menu
            </h2>
            <p className="max-w-xs text-sm text-white/60">
              Every service ends with a sharp finish — hot towel, product, and
              a proper once-over.
            </p>
          </Reveal>
          <ul className="mt-14 grid gap-x-16 gap-y-0 border-t border-hairline lg:grid-cols-2 lg:[&>li:nth-child(2)]:border-t">
            {SERVICES.map((service, index) => (
              <Reveal
                as="li"
                key={service.name}
                delay={index * 0.05}
                className="flex items-baseline justify-between gap-6 border-b border-hairline py-6"
              >
                <div>
                  <h3 className="display text-2xl">{service.name}</h3>
                  <p className="mt-1.5 max-w-prose text-sm text-white/65">
                    {service.description}
                  </p>
                </div>
                <p className="flex-none text-right text-sm font-semibold tabular-nums text-gold">
                  {service.price}
                  <span className="mt-0.5 block font-normal text-mid">{service.duration}</span>
                </p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-10 flex justify-center">
            <CtaLink href={BOOKING_URL} external>
              Book a Cut
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section id="work" aria-labelledby="gallery-heading" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="gallery-heading" className="gold-tick display text-5xl md:text-7xl">
              Fresh Work
            </h2>
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
          <ul className="mt-14 grid gap-8 sm:grid-cols-3">
            {TEAM.map((member, index) => (
              <Reveal as="li" key={member.name} delay={index * 0.06} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Back2Life Studios`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 [transition-timing-function:var(--ease-out-strong)] group-hover:scale-[1.04]"
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
                    href={BOOKING_URL}
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
      <section aria-labelledby="reviews-heading">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
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
            <Reveal>
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
            <Reveal delay={0.08}>
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
        <Globe
          className="pointer-events-none absolute left-1/2 top-1/2 w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.06] md:w-[60%]"
          strokeWidth={0.3}
        />
        <Reveal className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-24 text-center md:px-10 md:py-32">
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
