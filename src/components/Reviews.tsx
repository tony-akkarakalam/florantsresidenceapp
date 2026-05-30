import { reviewStars, reviews, site } from "@/lib/site";
import { SectionReveal } from "./SectionReveal";

export function Reviews() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="reviews-title">
      <div className="section-shell">
        <SectionReveal className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <span className="eyebrow">Reviews</span>
            <h2 id="reviews-title" className="section-title mt-5">Rated highly for comfort, calm, and convenience.</h2>
          </div>
          <div className="rounded-[28px] border border-[rgb(var(--line))] bg-[rgb(var(--card)_/_0.86)] p-5 shadow-[var(--shadow-soft)]">
            <p className="font-display text-5xl text-[rgb(var(--ink))]">{site.rating}</p>
            <div className="mt-2 flex gap-1 text-[rgb(var(--accent-2))]">
              {reviewStars.map(({ index, icon: Icon }) => (
                <Icon key={index} size={18} fill="currentColor" />
              ))}
            </div>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <SectionReveal key={review.name} delay={index * 0.06}>
              <figure className="premium-card h-full rounded-[28px] p-6">
                <div className="flex gap-1 text-[rgb(var(--accent-2))]">
                  {reviewStars.map(({ index: starIndex, icon: Icon }) => (
                    <Icon key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-6 text-lg leading-8 text-[rgb(var(--ink))]">&ldquo;{review.text}&rdquo;</blockquote>
                <figcaption className="mt-7">
                  <p className="font-semibold text-[rgb(var(--ink))]">{review.name}</p>
                  <p className="text-sm text-[rgb(var(--muted))]">{review.context}</p>
                </figcaption>
              </figure>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
