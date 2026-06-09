import Link from "next/link";
import { Home, Instagram, MapPinned, MessageCircle, Phone } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

const actions = [
  { label: "WhatsApp", href: whatsappUrl, icon: MessageCircle },
  { label: "Airbnb booking", href: site.bookingUrl, icon: Home },
  { label: "Call", href: `tel:${site.phone}`, icon: Phone },
  { label: "Maps directions", href: site.mapsUrl, icon: MapPinned },
  { label: "Instagram", href: site.instagramUrl, icon: Instagram }
];

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-1 border border-[rgb(var(--glass-line)_/_0.72)] bg-[rgb(var(--glass)_/_0.70)] p-1.5 shadow-[var(--shadow-nav)] backdrop-blur-2xl md:bottom-6 md:left-auto md:right-5 md:translate-x-0 md:flex-col">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <Link
            key={action.label}
            href={action.href}
            target={action.href.startsWith("tel:") ? undefined : "_blank"}
            rel={action.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
            className="grid size-10 place-items-center text-[rgb(var(--muted))] transition hover:bg-[rgb(var(--ink))] hover:text-[rgb(var(--surface))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent))]"
            aria-label={action.label}
          >
            <Icon size={19} />
          </Link>
        );
      })}
    </div>
  );
}
