import { propertyDetails } from "@/lib/site";
import { SectionReveal } from "./SectionReveal";

export function PropertyDetails() {
  return (
    <section className="py-10 sm:py-16" aria-labelledby="property-details-title">
      <div className="section-shell">
        <SectionReveal>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Property details</span>
              <h2 id="property-details-title" className="section-title mt-5">
                Everything arranged for an effortless stay.
              </h2>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {propertyDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <SectionReveal key={detail.label} delay={index * 0.025}>
                <article className="group h-full rounded-[24px] border border-[rgb(var(--line))] bg-[rgb(var(--card)_/_0.82)] p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                  <div className="flex items-start gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[rgb(var(--soft))] text-[rgb(var(--ink))] transition group-hover:bg-[rgb(var(--accent)_/_0.24)]">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-[rgb(var(--ink))]">{detail.label}</h3>
                      <p className="mt-2 text-sm leading-6 text-[rgb(var(--muted))]">{detail.description}</p>
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
