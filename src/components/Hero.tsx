"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ExternalLink, Images } from "lucide-react";
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
  const slides = visibleImages.length > 0 ? visibleImages : [{ id: "hero-fallback", src: "/images/hero/florants-hero-fallback.svg", alt: "Florants Residence" }];

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-[rgb(var(--footer-bg))]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop={slides.length > 1}
        speed={900}
        allowTouchMove={slides.length > 1}
        autoplay={shouldReduceMotion || slides.length < 2 ? false : { delay: 4600, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="absolute inset-0 h-full w-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={image.id} className="relative h-full w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
              unoptimized={image.src.endsWith(".svg")}
              onError={() => {
                setFailedImages((current) => new Set(current).add(image.id));
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-overlay absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgb(var(--surface))] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8">
        <motion.div
          className="max-w-3xl text-white drop-shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/14 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md">
            Entire rental unit in Kochi, India
          </p>
          <h1 className="font-display text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">
            {site.headline}
            <span className="mt-4 block text-3xl text-white/90 sm:text-5xl lg:text-6xl">{site.name}</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-white/88 sm:text-2xl">{site.tagline}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={site.bookingUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Book on Airbnb <ExternalLink size={18} />
            </Link>
            <Link href="#gallery" className="btn btn-ghost text-white">
              Explore Gallery <Images size={18} />
            </Link>
          </div>
        </motion.div>
      </div>

      <Link
        href="#about"
        className="absolute bottom-7 left-1/2 z-20 grid size-11 -translate-x-1/2 place-items-center rounded-full border border-white/25 bg-white/12 text-white backdrop-blur-md transition hover:bg-white/20"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={18} />
      </Link>
    </section>
  );
}
