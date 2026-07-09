import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { CtaLink } from "@/components/CtaLink";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Globe } from "@/components/Globe";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { BARBER_GALLERY, SERVICES, TEAM } from "@/data/barber";
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

export default function BarberPage() {
  return (
    <div className="grain grain-studios bg-near-black">
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-dvh items-end overflow-hidden">
        <Image
          src="/photos/barber-hero.jpg"
          alt="Inside the Back2Life Studios barbershop"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.5]"
        />
        <Globe
          className="pointer-events-none absolute -right-[15%] top-1/2 w-[70%] -translate-y-1/2 text-white opacity-15"
          strokeWidth={0.35}
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-32 md:px-10">
          <Reveal>
            <h1 className="display text-[17vw] md:text-[9rem]">
              Back2Life
              <span className="mt-3 block text-[6vw] tracking-[0.35em] text-white/90 md:text-3xl">
                Studios
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-white/80">
              Precision cuts, sharp fades, and shaves done properly. Sit down,
              switch off, come back to life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
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
      </section>

      {/* Services */}
      <section aria-labelledby="services-heading" className="relative overflow-hidden">
        <Globe
          className="pointer-events-none absolute -left-[30%] top-0 w-[70%] text-white opacity-[0.05]"
          strokeWidth={0.3}
        />
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 id="services-heading" className="display text-5xl md:text-7xl">
              The Menu
            </h2>
          </Reveal>
          <ul className="mt-12 divide-y divide-hairline border-y border-hairline">
            {SERVICES.map((service, index) => (
              <Reveal
                as="li"
                key={service.name}
                delay={index * 0.05}
                className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
              >
                  <div>
                    <h3 className="display text-2xl">{service.name}</h3>
                    <p className="mt-1 max-w-prose text-sm text-white/70">
                      {service.description}
                    </p>
                  </div>
                  <p className="text-sm font-semibold tabular-nums text-white">
                    {service.price}
                    <span className="ml-3 font-normal text-mid">{service.duration}</span>
                  </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section aria-labelledby="gallery-heading" className="bg-black">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="gallery-heading" className="display text-5xl md:text-7xl">
              Fresh Work
            </h2>
            <a
              href={INSTAGRAM_STUDIOS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors duration-200 hover:text-white"
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

      {/* Team */}
      <section aria-labelledby="team-heading">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 id="team-heading" className="display text-5xl md:text-7xl">
              The Chairs
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
            {TEAM.map((member, index) => (
              <Reveal
                as="li"
                key={member.name}
                delay={index * 0.06}
                className="h-full bg-near-black p-8"
              >
                <h3 className="display text-3xl">{member.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-mid">
                  {member.role}
                </p>
                <p className="mt-4 text-sm text-white/70">{member.specialty}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Hours & Location */}
      <section aria-labelledby="hours-heading" className="bg-black">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 id="hours-heading" className="display text-5xl md:text-7xl">
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
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-opacity duration-200 hover:opacity-70"
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
