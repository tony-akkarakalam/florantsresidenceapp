"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMemo, useState } from "react";
import type { GalleryCategory, GalleryImage } from "@/lib/gallery";

const galleryCategories: GalleryCategory[] = [
  "All",
  "Living Room",
  "Full Kitchen",
  "Dining Area",
  "Bedroom 1",
  "Bedroom 2",
  "Bathroom 1",
  "Bathroom 2",
  "Exterior"
];

const aspectClasses = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]"
};

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredImages = useMemo(
    () => images.filter((image) => activeCategory === "All" || image.category === activeCategory),
    [activeCategory, images]
  );

  const openImage = (image: GalleryImage) => {
    const index = filteredImages.findIndex((item) => item.id === image.id);
    setActiveIndex(index >= 0 ? index : 0);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="section-shell">
        <div className="max-w-5xl">
          <span className="eyebrow">Gallery</span>
          <h2 className="section-title mt-5">A calm visual tour through each part of the stay.</h2>
          <p className="section-copy mt-6">
            Filter by space, open any image, then swipe through the residence. Add real property photos to the folder
            architecture and they appear automatically.
          </p>
        </div>

        <div className="mt-9 flex gap-2 overflow-x-auto pb-2">
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? "border-[rgb(var(--ink))] bg-[rgb(var(--ink))] text-[rgb(var(--surface))]"
                  : "border-[rgb(var(--line))] bg-[rgb(var(--card)_/_0.82)] text-[rgb(var(--muted))] hover:text-[rgb(var(--ink))]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredImages.length > 0 ? (
          <motion.div layout className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.button
                  layout
                  key={image.id}
                  type="button"
                  onClick={() => openImage(image)}
                  className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-[26px] border border-[rgb(var(--line))] bg-[rgb(var(--card))] text-left shadow-sm"
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  aria-label={`Open ${image.alt}`}
                >
                  <span className={`relative block w-full overflow-hidden ${aspectClasses[image.aspect]}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      loading={index < 3 ? "eager" : "lazy"}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      unoptimized={image.src.endsWith(".svg")}
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/86 px-3 py-1 text-xs font-semibold text-neutral-900 opacity-0 shadow-sm backdrop-blur-sm transition group-hover:opacity-100">
                      {image.category}
                    </span>
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="mt-10 rounded-[28px] border border-dashed border-[rgb(var(--line))] bg-[rgb(var(--card)_/_0.82)] p-8 text-[rgb(var(--muted))]">
            Add images to the gallery folders in <span className="font-semibold text-[rgb(var(--ink))]">public/images</span>.
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeIndex !== null && filteredImages[activeIndex] ? (
          <motion.div
            className="fixed inset-0 z-[90] bg-black/84 p-4 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image viewer"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full bg-white/12 text-white backdrop-blur-md transition hover:bg-white/22"
              aria-label="Close gallery"
            >
              <X size={20} />
            </button>

            <Swiper
              modules={[Keyboard, Navigation, Pagination]}
              initialSlide={activeIndex}
              keyboard={{ enabled: true }}
              navigation={{ prevEl: ".gallery-prev", nextEl: ".gallery-next" }}
              pagination={{ type: "fraction" }}
              className="h-full w-full"
            >
              {filteredImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="relative mx-auto h-full max-w-6xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                      unoptimized={image.src.endsWith(".svg")}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              className="gallery-prev absolute left-4 top-1/2 z-20 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/12 text-white backdrop-blur-md transition hover:bg-white/22 sm:grid"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              className="gallery-next absolute right-4 top-1/2 z-20 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/12 text-white backdrop-blur-md transition hover:bg-white/22 sm:grid"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
