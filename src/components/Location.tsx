import Link from "next/link";
import Image from "next/image";
import { Car, ExternalLink, MapPinned, Utensils } from "lucide-react";
import { nearbyPlaces, site } from "@/lib/site";
import { SectionReveal } from "./SectionReveal";

export function Location() {
  return (
    <section id="location" className="architectural-section" aria-labelledby="location-title">
      <div className="section-shell">
        <SectionReveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="eyebrow">Location</span>
            <h2 id="location-title" className="section-title mt-7">Central access, composed as a quiet return.</h2>
          </div>
          <p className="section-copy lg:ml-auto">
            Florants Residence is positioned for practical movement around Kochi, close to healthcare, shopping,
            restaurants, and daily delivery services.
          </p>
        </SectionReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <SectionReveal>
            <div className="image-frame min-h-[36rem] rounded-[2rem]">
              <Image
                src="/images/exterior/Screenshot%202026-05-25%20145359.png"
                alt="Exterior view of Florants Residence"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </SectionReveal>

          <div className="grid gap-6">
            <SectionReveal delay={0.05}>
              <div className="overflow-hidden border border-[rgb(var(--line))] bg-[rgb(var(--card))] shadow-[var(--shadow-soft)]">
                <iframe
                  title="Florants Residence location in Kochi"
                  src="https://www.google.com/maps?q=Florants%20Residence%20Kochi%20India&output=embed"
                  className="h-[22rem] w-full border-0 grayscale-[0.35]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <aside className="premium-card p-7 lg:h-full">
                <span className="grid size-12 place-items-center border border-[rgb(var(--line))] bg-[rgb(var(--accent)_/_0.18)] text-[rgb(var(--ink))]">
                  <MapPinned size={22} />
                </span>
                <h3 className="mt-7 font-display text-4xl tracking-[-0.04em] text-[rgb(var(--ink))]">Nearby highlights</h3>
                <ul className="mt-5 space-y-3">
                  {nearbyPlaces.map((place) => (
                    <li key={place} className="flex items-start gap-3 text-[rgb(var(--muted))]">
                      <span className="mt-2 size-1.5 rounded-full bg-[rgb(var(--accent))]" />
                      <span>{place}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid gap-3">
                  <Link href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Get Directions <ExternalLink size={18} />
                  </Link>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[rgb(var(--soft)_/_0.76)] p-4">
                      <Car size={20} />
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em]">City access</p>
                    </div>
                    <div className="bg-[rgb(var(--soft)_/_0.76)] p-4">
                      <Utensils size={20} />
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em]">Dining nearby</p>
                    </div>
                  </div>
                </div>
              </aside>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
