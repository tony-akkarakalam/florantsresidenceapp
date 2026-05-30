import Link from "next/link";
import { Car, ExternalLink, MapPinned, Utensils } from "lucide-react";
import { nearbyPlaces, site } from "@/lib/site";
import { SectionReveal } from "./SectionReveal";

export function Location() {
  return (
    <section id="location" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionReveal className="max-w-5xl">
          <span className="eyebrow">Location</span>
          <h2 className="section-title mt-5">Central Kochi access with a quieter place to return.</h2>
          <p className="section-copy mt-6">
            Florants Residence is positioned for practical movement around Kochi, close to healthcare, shopping,
            restaurants, and daily delivery services.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <SectionReveal>
            <div className="overflow-hidden rounded-[32px] border border-[rgb(var(--line))] bg-[rgb(var(--card))] shadow-[var(--shadow-soft)]">
              <iframe
                title="Florants Residence location in Kochi"
                src="https://www.google.com/maps?q=Florants%20Residence%20Kochi%20India&output=embed"
                className="h-[440px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <aside className="premium-card rounded-[32px] p-6 lg:h-full">
              <span className="grid size-12 place-items-center rounded-2xl bg-[rgb(var(--accent)_/_0.22)] text-[rgb(var(--ink))]">
                <MapPinned size={22} />
              </span>
              <h3 className="mt-6 font-display text-3xl text-[rgb(var(--ink))]">Nearby highlights</h3>
              <ul className="mt-5 space-y-3">
                {nearbyPlaces.map((place) => (
                  <li key={place} className="flex items-start gap-3 text-[rgb(var(--muted))]">
                    <span className="mt-2 size-1.5 rounded-full bg-[rgb(var(--accent))]" />
                    <span>{place}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <Link href={site.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Get Directions <ExternalLink size={18} />
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[rgb(var(--soft))] p-4">
                    <Car size={20} />
                    <p className="mt-3 text-sm font-semibold">City access</p>
                  </div>
                  <div className="rounded-2xl bg-[rgb(var(--soft))] p-4">
                    <Utensils size={20} />
                    <p className="mt-3 text-sm font-semibold">Dining nearby</p>
                  </div>
                </div>
              </div>
            </aside>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
