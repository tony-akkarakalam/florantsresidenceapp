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
    `rounded-full px-3.5 py-2 text-sm transition-colors ${
      active === label
        ? "bg-[rgb(var(--ink))] text-[rgb(var(--surface))]"
        : "text-[rgb(var(--muted))] hover:bg-[rgb(var(--soft))] hover:text-[rgb(var(--ink))]"
    }`;

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-[rgb(var(--glass-line))] bg-[rgb(var(--glass)_/_0.82)] px-4 shadow-[var(--shadow-nav)] backdrop-blur-xl">
        <Link href="#home" className="flex min-w-0 items-center gap-3" aria-label="Florants Residence home">
          <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full border border-[rgb(var(--line))] bg-[rgb(var(--surface)_/_0.62)] p-1">
            <Image src={logoSrc} alt="" width={34} height={34} priority className="h-full w-full object-contain" unoptimized={logoSrc.endsWith(".svg")} />
          </span>
          <span className="hidden truncate font-display text-lg text-[rgb(var(--ink))] sm:block xl:text-xl">
            Florants Residence
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
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
            className="hidden size-10 place-items-center rounded-full text-[rgb(var(--muted))] transition hover:bg-[rgb(var(--soft))] hover:text-[rgb(var(--ink))] sm:grid"
            aria-label="Open Florants Residence Instagram"
          >
            <Instagram size={18} />
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-full bg-[rgb(var(--soft))] text-[rgb(var(--ink))] transition hover:scale-[1.03]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="grid size-10 place-items-center rounded-full bg-[rgb(var(--ink))] text-[rgb(var(--surface))] lg:hidden"
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
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[28px] border border-[rgb(var(--glass-line))] bg-[rgb(var(--glass)_/_0.94)] p-3 shadow-[var(--shadow-soft)] backdrop-blur-xl lg:hidden"
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
                className="flex rounded-2xl px-4 py-3 text-[rgb(var(--ink))] transition hover:bg-[rgb(var(--soft))]"
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
