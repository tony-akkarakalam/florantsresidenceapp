import { reviewStars, reviews, site } from "@/lib/site";
import { SectionReveal } from "./SectionReveal";

export function Reviews() {
  return (
    <section className="architectural-section py-20 sm:py-28" aria-labelledby="reviews-title">
      <div className="section-shell">
        <SectionReveal className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <span className="eyebrow">Reviews</span>
            <h2 id="reviews-title" className="section-title mt-7">Quiet praise for comfort, calm, and care.</h2>
          </div>
          <div className="border border-[rgb(var(--line))] bg-[rgb(var(--card)_/_0.76)] p-6 shadow-[var(--shadow-soft)]">
            <p className="font-display text-6xl tracking-[-0.05em] text-[rgb(var(--ink))]">{site.rating}</p>
            <div className="mt-2 flex gap-1 text-[rgb(var(--accent-2))]">
              {reviewStars.map(({ index, icon: Icon }) => (
                <Icon key={index} size={18} fill="currentColor" />
              ))}
            </div>
          </div>
        </SectionReveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-[rgb(var(--line))] bg-[rgb(var(--line))] md:grid-cols-3">
          {reviews.map((review, index) => (
            <SectionReveal key={review.name} delay={index * 0.06}>
              <figure className="h-full bg-[rgb(var(--card)_/_0.76)] p-7 backdrop-blur sm:p-9">
                <div className="flex gap-1 text-[rgb(var(--accent-2))]">
                  {reviewStars.map(({ index: starIndex, icon: Icon }) => (
                    <Icon key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-8 font-display text-2xl leading-9 tracking-[-0.035em] text-[rgb(var(--ink))]">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-7">
                  <p className="font-bold uppercase tracking-[0.14em] text-[rgb(var(--ink))]">{review.name}</p>
                  <p className="mt-1 text-sm text-[rgb(var(--muted))]">{review.context}</p>
                </figcaption>
              </figure>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
