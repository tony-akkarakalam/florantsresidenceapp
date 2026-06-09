import Link from "next/link";
import { ExternalLink, Home, Instagram, MapPinned, MessageCircle, Phone } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";
import { SectionReveal } from "./SectionReveal";

const actions = [
  { label: "WhatsApp", detail: site.displayPhone, href: whatsappUrl, icon: MessageCircle },
  { label: "Instagram", detail: "@florantsbnb", href: site.instagramUrl, icon: Instagram },
  { label: "Airbnb", detail: "View listing", href: site.bookingUrl, icon: Home },
  { label: "Directions", detail: "Open Google Maps", href: site.mapsUrl, icon: MapPinned },
  { label: "Call", detail: site.displayPhone, href: `tel:${site.phone}`, icon: Phone }
];

export function Contact() {
  return (
    <section className="architectural-section py-20 sm:py-28" aria-labelledby="contact-title">
      <div className="section-shell">
        <SectionReveal>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="eyebrow">Contact</span>
              <h2 id="contact-title" className="section-title mt-7">Quick communication, kept beautifully simple.</h2>
              <p className="section-copy mt-6">
                Reach Aldrin through WhatsApp, view Airbnb, follow Florants on Instagram, or open directions.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-[rgb(var(--line))] bg-[rgb(var(--line))] sm:grid-cols-2">
              {actions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.label}
                    href={action.href}
                    target={action.href.startsWith("tel:") ? undefined : "_blank"}
                    rel={action.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                    aria-label={`${action.label}: ${action.detail}`}
                    className="group bg-[rgb(var(--card)_/_0.76)] p-6 transition hover:bg-[rgb(var(--card))]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="grid size-12 place-items-center border border-[rgb(var(--line))] bg-[rgb(var(--soft)_/_0.68)] text-[rgb(var(--ink))]">
                        <Icon size={21} />
                      </span>
                      {action.href.startsWith("tel:") ? null : (
                        <ExternalLink size={17} className="text-[rgb(var(--muted))] transition group-hover:text-[rgb(var(--ink))]" />
                      )}
                    </div>
                    <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-[rgb(var(--ink))]">{action.label}</p>
                    <p className="mt-1 text-sm text-[rgb(var(--muted))]">{action.detail}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
