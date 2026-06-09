import Image from "next/image";
import Link from "next/link";
import { KeyRound, MessageCircle, ShieldCheck } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";
import { SectionReveal } from "./SectionReveal";

export function Host({ imageSrc }: { imageSrc: string }) {
  return (
    <section id="host" className="architectural-section overflow-visible">
      <div className="section-shell">
        <SectionReveal className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <span className="eyebrow">Meet your host</span>
            <h2 className="section-title mt-7">Hosted with calm clarity by Aldrin.</h2>
            <p className="section-copy mt-6">
              Expect responsive communication, an easy arrival rhythm, and a stay experience designed to feel private,
              prepared, and considered.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Message Aldrin <MessageCircle size={18} />
              </Link>
              <Link href={site.bookingUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                View Airbnb
              </Link>
            </div>
          </div>

          <article className="premium-card overflow-hidden">
            <div className="grid md:grid-cols-[0.92fr_1.08fr]">
              <div className="relative min-h-[32rem] overflow-hidden md:min-h-[40rem]">
                <Image
                  src={imageSrc}
                  alt="Aldrin, host of Florants Residence"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-[50%_34%]"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/36 via-transparent to-transparent" />
              </div>
              <div className="p-7 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-[rgb(var(--muted))]">Host</p>
                <h3 className="mt-4 font-display text-6xl tracking-[-0.055em] text-[rgb(var(--ink))]">{site.host}</h3>
                <div className="mt-10 grid gap-px overflow-hidden border border-[rgb(var(--line))] bg-[rgb(var(--line))]">
                  <div className="bg-[rgb(var(--soft)_/_0.66)] p-5">
                    <MessageCircle size={22} />
                    <h4 className="mt-4 font-semibold">Responsive communication</h4>
                    <p className="mt-2 text-sm leading-6 text-[rgb(var(--muted))]">Quick, clear contact before and during your visit.</p>
                  </div>
                  <div className="bg-[rgb(var(--soft)_/_0.66)] p-5">
                    <KeyRound size={22} />
                    <h4 className="mt-4 font-semibold">Self check-in ready</h4>
                    <p className="mt-2 text-sm leading-6 text-[rgb(var(--muted))]">A simple arrival process with lockbox access.</p>
                  </div>
                  <div className="bg-[rgb(var(--soft)_/_0.66)] p-5">
                    <ShieldCheck size={22} />
                    <h4 className="mt-4 font-semibold">Private stay support</h4>
                    <p className="mt-2 text-sm leading-6 text-[rgb(var(--muted))]">Space and privacy, with help available when needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </SectionReveal>
      </div>
    </section>
  );
}
