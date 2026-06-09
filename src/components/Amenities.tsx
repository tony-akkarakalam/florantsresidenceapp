import Image from "next/image";
import { amenities } from "@/lib/site";
import { SectionReveal } from "./SectionReveal";

export function Amenities() {
  return (
    <section id="amenities" className="architectural-section" aria-labelledby="amenities-title">
      <div className="section-shell">
        <SectionReveal className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="eyebrow">Amenities</span>
            <h2 id="amenities-title" className="section-title mt-7">Comforts kept quiet, useful, and close at hand.</h2>
          </div>
          <p className="section-copy lg:ml-auto">
            Practical essentials, calm interiors, and simple self-care conveniences are built into the apartment for
            short stays and longer visits alike.
          </p>
        </SectionReveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          <SectionReveal>
            <div className="image-frame h-full min-h-[34rem] rounded-[2rem]">
              <Image
                src="/images/living-room/living-room2.png"
                alt="Kitchen at Florants Residence"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 gap-px overflow-hidden border border-[rgb(var(--line))] bg-[rgb(var(--line))] sm:grid-cols-3">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <SectionReveal key={amenity.label} delay={index * 0.012}>
                  <div className="group flex min-h-32 flex-col justify-between bg-[rgb(var(--card)_/_0.75)] p-5 backdrop-blur transition hover:bg-[rgb(var(--card))]">
                    <span className="grid size-11 place-items-center border border-[rgb(var(--line))] bg-[rgb(var(--soft)_/_0.64)] text-[rgb(var(--ink))] transition group-hover:bg-[rgb(var(--accent)_/_0.20)]">
                      <Icon size={20} />
                    </span>
                    <span className="mt-6 text-sm font-bold uppercase leading-5 tracking-[0.12em] text-[rgb(var(--ink))]">
                      {amenity.label}
                    </span>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
