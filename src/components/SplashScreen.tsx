"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function SplashScreen({ logoSrc }: { logoSrc: string }) {
  const [visible, setVisible] = useState(true);
  const [mobileGpuSafeMode, setMobileGpuSafeMode] = useState(true);

  const prefersReducedMotion = useReducedMotion();
  const useMinimalMotion = mobileGpuSafeMode || Boolean(prefersReducedMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 1024px), (hover: none), (pointer: coarse)"
    );

    const applyMode = () => {
      setMobileGpuSafeMode(mediaQuery.matches);
    };

    applyMode();
    mediaQuery.addEventListener("change", applyMode);

    const fadeTimer = window.setTimeout(() => setVisible(false), 2200);

    return () => {
      mediaQuery.removeEventListener("change", applyMode);
      window.clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[140] overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#8ea7b8]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: useMinimalMotion ? 1 : 1.03,
            filter: useMinimalMotion ? "none" : "blur(8px)",
            transition: {
              duration: 0.55,
              ease: "easeInOut",
            },
          }}
        >
          {/* Ambient luxury glow */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_75%_70%,rgba(180,205,220,0.22),transparent_38%)]"
            animate={
              useMinimalMotion
                ? { opacity: 0.9 }
                : { opacity: [0.7, 1, 0.7] }
            }
            transition={
              useMinimalMotion
                ? { duration: 0 }
                : {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />

          <div className="relative flex h-full w-full flex-col items-center justify-center px-4 pb-20">
            <motion.div
              className="relative h-[40vh] w-full max-w-[34rem]"
              initial={{
                opacity: 0,
                y: 18,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.75,
                ease: "easeOut",
              }}
            >
              <Image
  src="/images/logo/Florants Residence.png"
  alt="Florants Residence Logo"
  fill
  priority
  className="object-contain"
/>
            </motion.div>

            <motion.div
              className="mt-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              

              <p className="mt-2 text-sm uppercase tracking-[0.35em] text-white/75 md:text-base">
                Stay in Serenity
              </p>
            </motion.div>

            {/* Loading Section */}
            <div
              className="absolute left-1/2 w-[17rem] -translate-x-1/2 sm:w-[22rem]"
              style={{
                bottom: "max(3rem, calc(env(safe-area-inset-bottom) + 2rem))",
              }}
            >
              <div className="mb-3 flex items-center justify-center gap-2">
                {[0, 1, 2].map((dot) => (
                  <motion.span
                    key={dot}
                    className="h-2 w-2 rounded-full bg-white/90"
                    animate={
                      useMinimalMotion
                        ? { opacity: 0.8 }
                        : {
                            y: [0, -6, 0],
                            opacity: [0.35, 1, 0.35],
                          }
                    }
                    transition={
                      useMinimalMotion
                        ? { duration: 0 }
                        : {
                            duration: 0.9,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: dot * 0.12,
                          }
                    }
                  />
                ))}
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-white/70 via-white to-[#d8e4ec]"
                  initial={{ width: "5%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2.2,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <p className="mt-3 text-center text-xs uppercase tracking-[0.3em] text-white/80">
                Loading
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}