import { propertyDetails } from "@/lib/site";
import { SectionReveal } from "./SectionReveal";

export function PropertyDetails() {
  return (
    <section className="architectural-section py-20 sm:py-28" aria-labelledby="property-details-title">
      <div className="section-shell">
        <SectionReveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="eyebrow">Residence details</span>
            <h2 id="property-details-title" className="section-title mt-7">
              Essentials, edited with restraint.
            </h2>
          </div>
          <p className="section-copy lg:ml-auto">
            Every practical element remains easy to find, but the presentation is quieter and more architectural.
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-[rgb(var(--line))] bg-[rgb(var(--line))] sm:grid-cols-2 lg:grid-cols-3">
          {propertyDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <SectionReveal key={detail.label} delay={index * 0.025}>
                <article className="group h-full bg-[rgb(var(--card)_/_0.74)] p-6 backdrop-blur transition hover:bg-[rgb(var(--card))] sm:p-7">
                  <div className="flex items-start gap-5">
                    <span className="grid size-12 shrink-0 place-items-center border border-[rgb(var(--line))] bg-[rgb(var(--soft)_/_0.62)] text-[rgb(var(--ink))] transition group-hover:bg-[rgb(var(--accent)_/_0.18)]">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl tracking-[-0.035em] text-[rgb(var(--ink))]">{detail.label}</h3>
                      <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">{detail.description}</p>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
