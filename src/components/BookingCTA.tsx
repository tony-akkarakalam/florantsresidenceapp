import Link from "next/link";
import { ExternalLink, MapPinned } from "lucide-react";
import { site } from "@/lib/site";
import { SectionReveal } from "./SectionReveal";

export function BookingCTA() {
  return (
    <section id="book" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionReveal>
          <div className="overflow-hidden rounded-[36px] border border-[rgb(var(--line))] bg-[linear-gradient(135deg,rgb(var(--footer-bg)_/_0.96),rgb(var(--footer-bg)_/_0.86)),radial-gradient(circle_at_top_right,rgb(var(--accent)_/_0.28),transparent_28rem)] p-7 text-[rgb(var(--footer-text))] shadow-[var(--shadow-soft)] sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-white/78">
                Ready when your dates are
              </span>
              <h2 className="mt-7 font-display text-4xl leading-none text-white sm:text-6xl lg:text-7xl">
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
        </SectionReveal>
      </div>
    </section>
  );
}
