import Link from "next/link";
import { Home, Instagram, MapPinned, MessageCircle, Phone } from "lucide-react";
import { navLinks, site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[rgb(var(--footer-bg))] px-5 py-14 text-[rgb(var(--footer-text))] sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgb(var(--accent)_/_0.24),transparent_30rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-4xl text-white">{site.name}</p>
            <p className="mt-3 max-w-md text-white/72">{site.headline}. {site.tagline}</p>
            <div className="mt-6 flex gap-3">
              <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/18" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </Link>
              <Link href={site.instagramUrl} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/18" aria-label="Instagram">
                <Instagram size={18} />
              </Link>
              <Link href={site.mapsUrl} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/18" aria-label="Directions">
                <MapPinned size={18} />
              </Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Quick links</p>
            <div className="mt-4 grid gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white/66 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Book and Contact</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href={site.bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-sm font-semibold text-white/78 transition hover:bg-white/18 hover:text-white"><Home size={15} />Airbnb</Link>
              <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-sm font-semibold text-white/78 transition hover:bg-white/18 hover:text-white"><MessageCircle size={15} />WhatsApp</Link>
              <Link href={`tel:${site.phone}`} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-sm font-semibold text-white/78 transition hover:bg-white/18 hover:text-white"><Phone size={15} />Call</Link>
              <Link href={site.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-sm font-semibold text-white/78 transition hover:bg-white/18 hover:text-white"><Instagram size={15} />Instagram</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/12 pt-6 text-sm text-white/55">
          Copyright {new Date().getFullYear()} Florants Residence. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
