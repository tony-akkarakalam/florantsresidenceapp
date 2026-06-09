"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { useTheme } from "./ThemeProvider";

export function Navbar({ logoSrc }: { logoSrc: string }) {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      const current = navLinks.reduce((match, link) => {
        const section = document.querySelector(link.href);
        if (!section) return match;

        const top = section.getBoundingClientRect().top;
        return top <= 150 ? link.label : match;
      }, "Home");

      setActive(current);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const linkClass = (label: string) =>
    `relative px-2 py-2 text-[0.66rem] font-bold uppercase tracking-[0.23em] transition-colors after:absolute after:inset-x-2 after:-bottom-0.5 after:h-px after:origin-left after:bg-current after:transition-transform ${
      active === label
        ? "text-[rgb(var(--ink))] after:scale-x-100"
        : "text-[rgb(var(--muted))] after:scale-x-0 hover:text-[rgb(var(--ink))] hover:after:scale-x-100"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between border border-[rgb(var(--glass-line)_/_0.72)] bg-[rgb(var(--glass)_/_0.58)] px-4 shadow-[var(--shadow-nav)] backdrop-blur-2xl sm:px-5">
        <Link href="#home" className="flex min-w-0 items-center gap-3" aria-label="Florants Residence home">
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden">
            <Image
  src={logoSrc}
  alt="Florants Residence"
  width={48}
  height={48}
  priority
  className="h-full w-full object-contain"
  unoptimized
/>
          </span>
          <span className="hidden truncate font-display text-xl tracking-[-0.02em] text-[rgb(var(--ink))] sm:block">
            Florants Residence
          </span>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.label)}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden size-10 place-items-center text-[rgb(var(--muted))] transition hover:text-[rgb(var(--ink))] sm:grid"
            aria-label="Open Florants Residence Instagram"
          >
            <Instagram size={18} />
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="grid size-10 place-items-center border border-[rgb(var(--line))] bg-[rgb(var(--surface)_/_0.38)] text-[rgb(var(--ink))] transition hover:scale-[1.03]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="grid size-10 place-items-center bg-[rgb(var(--ink))] text-[rgb(var(--surface))] lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-auto mt-3 max-w-7xl overflow-hidden border border-[rgb(var(--glass-line))] bg-[rgb(var(--glass)_/_0.94)] p-3 shadow-[var(--shadow-soft)] backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[rgb(var(--ink))] transition hover:bg-[rgb(var(--soft))]"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
