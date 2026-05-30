"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen({ logoSrc }: { logoSrc: string }) {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), shouldReduceMotion ? 450 : 1350);
    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[rgb(var(--surface))]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <motion.div
            className="flex flex-col items-center gap-5"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="relative grid size-20 place-items-center overflow-hidden rounded-full border border-[rgb(var(--line))] bg-[rgb(var(--card))] shadow-[var(--shadow-soft)]">
              <Image src={logoSrc} alt="" width={56} height={56} priority unoptimized={logoSrc.endsWith(".svg")} />
            </span>
            <span className="font-display text-3xl text-[rgb(var(--ink))]">Florants Residence</span>
            <span className="h-px w-36 bg-gradient-to-r from-transparent via-[rgb(var(--accent))] to-transparent" />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
