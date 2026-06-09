import Link from "next/link";
import Image from "next/image";
import { ExternalLink, MapPinned } from "lucide-react";
import { site } from "@/lib/site";
import { SectionReveal } from "./SectionReveal";

export function BookingCTA() {
  return (
    <section id="book" className="architectural-section">
      <div className="section-shell">
        <SectionReveal>
          <div className="relative min-h-[42rem] overflow-hidden border border-[rgb(var(--line))] bg-[rgb(var(--footer-bg))] text-[rgb(var(--footer-text))] shadow-[var(--shadow-soft)]">
            <Image
              src="/images/exterior/Screenshot%202026-05-25%20145429.png"
              alt="Florants Residence exterior"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-[0.58]"
              unoptimized
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,9,0.82),rgba(8,8,9,0.44),rgba(8,8,9,0.70)),radial-gradient(circle_at_top_right,rgba(202,160,98,0.28),transparent_28rem)]" />
            <div className="relative flex min-h-[42rem] items-end p-7 sm:p-12 lg:p-16">
            <div className="max-w-4xl">
              <span className="inline-flex border border-white/18 bg-white/10 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/78">
                Ready when your dates are
              </span>
              <h2 className="mt-8 font-display text-5xl leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
                Settle into a serene Kochi stay.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
                Book externally on Airbnb or open directions for the location. No pressure, no clutter, just the next
                clear step.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href={site.bookingUrl} target="_blank" rel="noreferrer" className="btn bg-white text-neutral-950">
                  Book on Airbnb <ExternalLink size={18} />
                </Link>
                <Link href={site.mapsUrl} target="_blank" rel="noreferrer" className="btn border border-white/20 bg-white/10 text-white">
                  Get Directions <MapPinned size={18} />
                </Link>
              </div>
            </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
