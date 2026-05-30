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
    <section className="py-20 sm:py-28" aria-labelledby="contact-title">
      <div className="section-shell">
        <SectionReveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="eyebrow">Contact</span>
              <h2 id="contact-title" className="section-title mt-5">Quick communication, kept simple.</h2>
              <p className="section-copy mt-6">
                Reach Aldrin through WhatsApp, view Airbnb, follow Florants on Instagram, or open directions.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {actions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.label}
                    href={action.href}
                    target={action.href.startsWith("tel:") ? undefined : "_blank"}
                    rel={action.href.startsWith("tel:") ? undefined : "noreferrer"}
                    className="group rounded-[26px] border border-[rgb(var(--line))] bg-[rgb(var(--card)_/_0.82)] p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="grid size-12 place-items-center rounded-2xl bg-[rgb(var(--soft))] text-[rgb(var(--ink))]">
                        <Icon size={21} />
                      </span>
                      <ExternalLink size={17} className="text-[rgb(var(--muted))] transition group-hover:text-[rgb(var(--ink))]" />
                    </div>
                    <p className="mt-5 font-semibold text-[rgb(var(--ink))]">{action.label}</p>
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
