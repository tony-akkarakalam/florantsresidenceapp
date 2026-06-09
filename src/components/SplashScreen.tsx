"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function SplashScreen({ logoSrc }: { logoSrc: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="florants-splash pointer-events-none fixed inset-0 z-[140] overflow-hidden bg-[linear-gradient(145deg,#0f1115,#16181b_58%,#1f2327)] [animation:florantsSplashDismiss_360ms_ease_850ms_forwards]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(212,180,129,0.16),transparent_32%),radial-gradient(circle_at_80%_78%,rgba(255,255,255,0.08),transparent_34%)]" />

      <div className="relative flex h-full w-full flex-col items-center justify-center px-4 pb-16">
        <div className="relative h-[22vh] w-full max-w-[24rem] sm:h-[26vh] sm:max-w-[28rem]">
          <Image
            src={logoSrc}
            alt="Florants Residence logo"
            fill
            priority
            sizes="(min-width: 640px) 28rem, 24rem"
            className="object-contain"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-white/80 sm:text-xs">
            {site.name}
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.35em] text-white/85 md:text-base">{site.tagline}</p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes florantsSplashDismiss {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .florants-splash {
            animation-duration: 1ms;
            animation-delay: 320ms;
          }
        }
      `}</style>
    </div>
  );
}
