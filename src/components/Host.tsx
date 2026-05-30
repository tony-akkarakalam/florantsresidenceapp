import Image from "next/image";
import Link from "next/link";
import { KeyRound, MessageCircle, ShieldCheck } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";
import { SectionReveal } from "./SectionReveal";

export function Host({ imageSrc }: { imageSrc: string }) {
  return (
    <section id="host" className="overflow-visible py-24 sm:py-32">
      <div className="section-shell">
        <SectionReveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="eyebrow">Meet your host</span>
            <h2 className="section-title mt-5">Hosted with calm clarity by Aldrin.</h2>
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

          <article className="premium-card overflow-visible rounded-[34px]">
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative m-3 aspect-[4/5] min-h-80 overflow-hidden rounded-[28px] md:m-4">
                <Image src={imageSrc} alt="Aldrin, host of Florants Residence" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" unoptimized={imageSrc.endsWith(".svg")} />
              </div>
              <div className="p-7 sm:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[rgb(var(--muted))]">Host</p>
                <h3 className="mt-3 font-display text-5xl text-[rgb(var(--ink))]">{site.host}</h3>
                <div className="mt-8 grid gap-4">
                  <div className="rounded-3xl bg-[rgb(var(--soft))] p-5">
                    <MessageCircle size={22} />
                    <h4 className="mt-4 font-semibold">Responsive communication</h4>
                    <p className="mt-2 text-sm leading-6 text-[rgb(var(--muted))]">Quick, clear contact before and during your visit.</p>
                  </div>
                  <div className="rounded-3xl bg-[rgb(var(--soft))] p-5">
                    <KeyRound size={22} />
                    <h4 className="mt-4 font-semibold">Self check-in ready</h4>
                    <p className="mt-2 text-sm leading-6 text-[rgb(var(--muted))]">A simple arrival process with lockbox access.</p>
                  </div>
                  <div className="rounded-3xl bg-[rgb(var(--soft))] p-5">
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
