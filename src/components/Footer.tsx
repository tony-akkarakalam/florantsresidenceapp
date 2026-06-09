import Link from "next/link";
import { Home, Instagram, MapPinned, MessageCircle, Phone } from "lucide-react";
import { navLinks, site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[rgb(var(--footer-bg))] px-5 py-20 text-[rgb(var(--footer-text))] sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgb(var(--accent)_/_0.22),transparent_32rem),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-5xl tracking-[-0.05em] text-white">{site.name}</p>
            <p className="mt-4 max-w-md text-lg leading-8 text-white/78">{site.headline}. {site.tagline}</p>
            <div className="mt-6 flex gap-3">
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center border border-white/12 bg-white/8 text-white transition hover:bg-white/16" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </Link>
              <Link href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center border border-white/12 bg-white/8 text-white transition hover:bg-white/16" aria-label="Instagram">
                <Instagram size={18} />
              </Link>
              <Link href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center border border-white/12 bg-white/8 text-white transition hover:bg-white/16" aria-label="Directions">
                <MapPinned size={18} />
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white">Quick links</p>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm uppercase tracking-[0.16em] text-white/78 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white">Book and Contact</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/16 bg-white/10 px-3.5 py-2 text-sm font-semibold text-white/86 transition hover:bg-white/16 hover:text-white"><Home size={15} />Airbnb</Link>
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/16 bg-white/10 px-3.5 py-2 text-sm font-semibold text-white/86 transition hover:bg-white/16 hover:text-white"><MessageCircle size={15} />WhatsApp</Link>
              <Link href={`tel:${site.phone}`} className="inline-flex items-center gap-2 border border-white/16 bg-white/10 px-3.5 py-2 text-sm font-semibold text-white/86 transition hover:bg-white/16 hover:text-white"><Phone size={15} />Call</Link>
              <Link href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/16 bg-white/10 px-3.5 py-2 text-sm font-semibold text-white/86 transition hover:bg-white/16 hover:text-white"><Instagram size={15} />Instagram</Link>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-white/12 pt-7 text-sm text-white/70">
          Copyright {new Date().getFullYear()} Florants Residence. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
