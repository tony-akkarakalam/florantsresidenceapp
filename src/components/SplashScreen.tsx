"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function SplashScreen({ logoSrc }: { logoSrc: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 2400);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[140] overflow-hidden bg-[linear-gradient(145deg,#0f1115,#16181b_58%,#1f2327)]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(8px)",
            transition: {
              duration: 0.65,
              ease: "easeInOut"
            }
          }}
          aria-hidden="true"
        >
          {/* Ambient Glow */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(212,180,129,0.16),transparent_32%),radial-gradient(circle_at_80%_78%,rgba(255,255,255,0.08),transparent_34%)]"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative flex h-full w-full flex-col items-center justify-center px-4 pb-20">
            {/* Large Logo */}
            <motion.div
              className="relative h-[48vh] w-full max-w-[92vw] sm:h-[52vh]"
              initial={{
                opacity: 0,
                y: 16,
                scale: 0.96
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }}
              transition={{
                duration: 0.75,
                ease: "easeOut"
              }}
            >
              <Image
                src={logoSrc}
                alt="Florants Residence Logo"
                fill
                priority
                sizes="100vw"
                className="object-contain drop-shadow-[0_0_42px_rgba(255,255,255,0.25)]"
              />
            </motion.div>

            {/* Loading Area */}
            <div
              className="absolute left-1/2 w-[17rem] -translate-x-1/2 sm:w-[22rem]"
              style={{
                bottom: "max(3rem, calc(env(safe-area-inset-bottom) + 2rem))"
              }}
            >
              <div className="mb-2 flex items-center justify-center gap-2">
                {[0, 1, 2].map((dot) => (
                  <motion.span
                    key={dot}
                    className="h-2 w-2 rounded-full bg-white/90"
                    animate={{
                      y: [0, -6, 0],
                      opacity: [0.35, 1, 0.35]
                    }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: dot * 0.12
                    }}
                  />
                ))}
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-200 via-white to-amber-100"
                  initial={{ width: "4%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2.2,
                    ease: "easeInOut"
                  }}
                />
              </div>

              <p className="mt-3 text-center text-xs uppercase tracking-[0.28em] text-white/75">
                Loading
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}