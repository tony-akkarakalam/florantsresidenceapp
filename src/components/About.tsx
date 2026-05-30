import { MapPinned, ShieldCheck, Sparkles, Star } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const highlights = [
  {
    title: "Private 2BHK comfort",
    text: "A fully private apartment for families, friends, or professionals who want calm space without losing access to the city.",
    icon: Sparkles
  },
  {
    title: "Central Kochi ease",
    text: "Stay near Lakeshore Hospital and Forum Mall Kochi, with restaurants and daily services close at hand.",
    icon: MapPinned
  },
  {
    title: "Prepared for real stays",
    text: "AC bedrooms, a bright living area, kitchen essentials, fridge, washing machine, and everyday conveniences.",
    icon: ShieldCheck
  }
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionReveal className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="eyebrow">About the residence</span>
            <h2 className="section-title mt-5">Peaceful city living, finished with boutique warmth.</h2>
          </div>
          <p className="section-copy">
            Enjoy a fully private 2BHK at Florants Residence, perfect for families, friends, or professionals.
            Features include 2 AC bedrooms, a bright living area, and a kitchen with fridge, washing machine, and
            essentials. Peaceful, central, and convenient.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={item.title} delay={index * 0.06}>
                <article className="premium-card h-full rounded-[28px] p-6">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[rgb(var(--accent)_/_0.18)] text-[rgb(var(--ink))]">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-[rgb(var(--ink))]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[rgb(var(--muted))]">{item.text}</p>
                </article>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal className="mt-8">
          <div className="grid gap-4 rounded-[32px] border border-[rgb(var(--line))] bg-[linear-gradient(120deg,rgb(var(--accent)_/_0.18),rgb(var(--accent-2)_/_0.16),rgb(var(--card)_/_0.86))] p-5 sm:grid-cols-3 sm:p-7">
            <div>
              <p className="text-sm text-[rgb(var(--muted))]">Rated</p>
              <p className="mt-1 flex items-center gap-2 font-display text-4xl text-[rgb(var(--ink))]">
                4.8 <Star size={23} fill="currentColor" />
              </p>
            </div>
            <div>
              <p className="text-sm text-[rgb(var(--muted))]">Hosted by</p>
              <p className="mt-1 font-display text-4xl text-[rgb(var(--ink))]">Aldrin</p>
            </div>
            <div>
              <p className="text-sm text-[rgb(var(--muted))]">Best for</p>
              <p className="mt-1 font-display text-4xl text-[rgb(var(--ink))]">4 Guests</p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
