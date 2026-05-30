import { amenities } from "@/lib/site";
import { SectionReveal } from "./SectionReveal";

export function Amenities() {
  return (
    <section id="amenities" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionReveal className="max-w-5xl">
          <span className="eyebrow">Amenities</span>
          <h2 className="section-title mt-5">The comforts that make the stay feel settled.</h2>
          <p className="section-copy mt-6">
            Practical essentials, calm interiors, and simple self-care conveniences are built into the apartment for
            short stays and longer visits alike.
          </p>
        </SectionReveal>

        <div className="mt-11 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <SectionReveal key={amenity.label} delay={index * 0.015}>
                <div className="group flex min-h-32 flex-col justify-between rounded-[22px] border border-[rgb(var(--line))] bg-[rgb(var(--card)_/_0.82)] p-4 transition hover:-translate-y-1 hover:border-[rgb(var(--accent)_/_0.55)] hover:shadow-[var(--shadow-soft)]">
                  <span className="grid size-11 place-items-center rounded-2xl bg-[rgb(var(--soft))] text-[rgb(var(--ink))] transition group-hover:bg-[rgb(var(--accent)_/_0.25)]">
                    <Icon size={21} />
                  </span>
                  <span className="mt-5 text-sm font-semibold leading-5 text-[rgb(var(--ink))]">{amenity.label}</span>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
