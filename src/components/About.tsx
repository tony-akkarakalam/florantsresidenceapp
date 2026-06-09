import Image from "next/image";
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
    <section id="about" className="architectural-section luxury-grid">
      <div className="section-shell">
        <SectionReveal className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="eyebrow">About the place</span>
            <h2 className="section-title mt-7">Quiet architecture for a slower city stay.</h2>
          </div>
          <p className="section-copy lg:ml-auto">
            Florants Residence is composed for calm: warm light, private rooms, practical comforts, and a central Kochi
            setting that keeps the city close without letting it take over the mood.
          </p>
        </SectionReveal>

        <SectionReveal className="mt-16 sm:mt-24">
          <div className="image-frame aspect-[16/10] rounded-[2.25rem] sm:aspect-[21/9]">
            <Image
              src="/images/living-room/living-room.jpg"
              alt="Warm living room at Florants Residence"
              fill
              sizes="100vw"
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </SectionReveal>

        <div className="mt-8 grid gap-px overflow-hidden border border-[rgb(var(--line))] bg-[rgb(var(--line))] md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={item.title} delay={index * 0.06}>
                <article className="h-full bg-[rgb(var(--card)_/_0.76)] p-7 backdrop-blur transition hover:bg-[rgb(var(--card)_/_0.95)] sm:p-9">
                  <span className="grid size-12 place-items-center border border-[rgb(var(--line))] bg-[rgb(var(--soft)_/_0.72)] text-[rgb(var(--ink))]">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-7 font-display text-3xl tracking-[-0.04em] text-[rgb(var(--ink))]">{item.title}</h3>
                  <p className="mt-4 max-w-sm leading-8 text-[rgb(var(--muted))]">{item.text}</p>
                </article>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal className="mt-10">
          <div className="grid gap-px overflow-hidden border border-[rgb(var(--line))] bg-[rgb(var(--line))] sm:grid-cols-3">
            <div>
              <div className="bg-[rgb(var(--card)_/_0.74)] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[rgb(var(--muted))]">Rated</p>
              <p className="mt-2 flex items-center gap-2 font-display text-5xl text-[rgb(var(--ink))]">
                4.8 <Star size={23} fill="currentColor" />
              </p>
              </div>
            </div>
            <div>
              <div className="bg-[rgb(var(--card)_/_0.74)] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[rgb(var(--muted))]">Hosted by</p>
              <p className="mt-2 font-display text-5xl text-[rgb(var(--ink))]">Aldrin</p>
              </div>
            </div>
            <div>
              <div className="bg-[rgb(var(--card)_/_0.74)] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[rgb(var(--muted))]">Best for</p>
              <p className="mt-2 font-display text-5xl text-[rgb(var(--ink))]">4 Guests</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
