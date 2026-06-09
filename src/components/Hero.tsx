"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMemo, useState } from "react";
import { site } from "@/lib/site";

type HeroImage = {
  id: string;
  src: string;
  alt: string;
};

export function Hero({ images }: { images: HeroImage[] }) {
  const shouldReduceMotion = useReducedMotion();
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const visibleImages = useMemo(() => images.filter((image) => !failedImages.has(image.id)), [failedImages, images]);
  const slides =
    visibleImages.length > 0
      ? visibleImages
      : [{ id: "hero-fallback", src: "/images/exterior/Screenshot%202026-05-25%20145359.png", alt: "Florants Residence exterior" }];

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-[rgb(var(--footer-bg))] sm:min-h-[720px]"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop={slides.length > 1}
        speed={shouldReduceMotion ? 0 : 1800}
        allowTouchMove={slides.length > 1}
        autoplay={shouldReduceMotion || slides.length < 2 ? false : { delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="absolute inset-0 !h-full w-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={image.id} className="relative !h-full w-full overflow-hidden">
            <div
              className={`relative h-full w-full ${
                shouldReduceMotion ? "scale-[1.01]" : "florants-hero-ken-burns"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-[50%_44%] brightness-[0.76] saturate-[0.94] sm:object-[50%_48%] lg:object-center"
                onError={() => {
                  setFailedImages((current) => new Set(current).add(image.id));
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,5,0.46),rgba(4,4,5,0.18)_28%,rgba(4,4,5,0.34)_68%,rgba(4,4,5,0.74)),radial-gradient(ellipse_at_center,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.22)_45%,rgba(0,0,0,0.58)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[rgb(var(--surface))] via-[rgb(var(--surface)_/_0.34)] to-transparent" />
      <div className="absolute inset-x-5 top-24 z-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent sm:inset-x-10" />

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-5 py-28 text-center sm:px-8">
        <motion.div
          className="max-w-5xl text-white drop-shadow-[0_28px_70px_rgba(0,0,0,0.42)]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1], filter: { duration: 0.8 } }}
        >
          <p className="mx-auto mb-7 flex w-fit items-center gap-4 text-[0.62rem] font-bold uppercase tracking-[0.36em] text-white/84 sm:mb-8 sm:text-[0.72rem] sm:tracking-[0.42em]">
            <span className="h-px w-8 bg-white/56 sm:w-12" />
            {site.headline}
            <span className="h-px w-8 bg-white/56 sm:w-12" />
          </p>
          <h1 className="font-display text-[clamp(3.85rem,12vw,10.5rem)] leading-[0.78] tracking-[-0.07em]">
            Florants
            <span className="block text-[0.48em] leading-[0.94] tracking-[0.17em] text-white/94">Residence</span>
          </h1>
          <p className="mt-7 font-display text-2xl italic leading-8 tracking-[-0.02em] text-white/88 sm:mt-9 sm:text-4xl">
            {site.tagline}
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-24 left-5 right-5 z-20 mx-auto hidden max-w-7xl grid-cols-3 items-end text-white/70 sm:grid">
        <p className="text-left text-[0.66rem] font-bold uppercase tracking-[0.28em]">Kochi, India</p>
        <Link href="#gallery" className="mx-auto text-[0.66rem] font-bold uppercase tracking-[0.28em] transition hover:text-white">
          Discover
        </Link>
        <p className="text-right text-[0.66rem] font-bold uppercase tracking-[0.28em]">Private 2BHK</p>
      </div>

      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 grid size-11 -translate-x-1/2 place-items-center rounded-full border border-white/24 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={18} />
      </Link>

      <style jsx global>{`
        .florants-hero-ken-burns {
          animation: florantsHeroKenBurns 9.4s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate;
          transform-origin: center;
          will-change: transform;
        }

        @keyframes florantsHeroKenBurns {
          from {
            transform: scale(1.015) translate3d(0, 0, 0);
          }
          to {
            transform: scale(1.085) translate3d(-0.7%, -0.55%, 0);
          }
        }

        @media (max-width: 640px) {
          .florants-hero-ken-burns {
            animation-duration: 10.5s;
          }

          @keyframes florantsHeroKenBurns {
            from {
              transform: scale(1.005) translate3d(0, 0, 0);
            }
            to {
              transform: scale(1.055) translate3d(0, -0.45%, 0);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .florants-hero-ken-burns {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
