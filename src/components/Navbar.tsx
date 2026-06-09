"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { useTheme } from "./ThemeProvider";

export function Navbar({ logoSrc }: { logoSrc: string }) {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const mobileMenuId = useId();

  useEffect(() => {
    const sections = navLinks
      .map((link) => {
        const section = document.querySelector(link.href);
        return section ? { label: link.label, section } : null;
      })
      .filter((value): value is { label: string; section: Element } => Boolean(value));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio);

        if (visibleEntries[0]) {
          const visibleSection = sections.find(({ section }) => section === visibleEntries[0].target);
          if (visibleSection) {
            setActive(visibleSection.label);
          }
        }
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0.2, 0.35, 0.55]
      }
    );

    sections.forEach(({ section }) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const closeOnHashChange = () => setOpen(false);

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("hashchange", closeOnHashChange);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("hashchange", closeOnHashChange);
    };
  }, [open]);

  const linkClass = (label: string) =>
    `relative px-2 py-2 text-[0.66rem] font-bold uppercase tracking-[0.23em] transition-colors after:absolute after:inset-x-2 after:-bottom-0.5 after:h-px after:origin-left after:bg-current after:transition-transform ${
      active === label
        ? "text-[rgb(var(--ink))] after:scale-x-100"
        : "text-[rgb(var(--muted))] after:scale-x-0 hover:text-[rgb(var(--ink))] hover:after:scale-x-100"
    }`;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6"
      style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-[rgb(var(--glass-line)_/_0.72)] bg-[rgb(var(--glass)_/_0.58)] px-4 shadow-[var(--shadow-nav)] backdrop-blur-2xl sm:px-5">
        <Link href="#home" className="flex min-w-0 items-center gap-3" aria-label="Florants Residence home">
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden">
            <Image
              src={logoSrc}
              alt="Florants Residence"
              width={48}
              height={48}
              priority
              sizes="48px"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="truncate font-display text-sm font-medium tracking-[-0.02em] text-[rgb(var(--ink))] sm:text-xl">
  Florants Residence
</span>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.label)} aria-current={active === link.label ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
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
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={mobileMenuId}
            aria-haspopup="menu"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={mobileMenuId}
            className="mx-auto mt-3 max-w-7xl overflow-hidden border border-[rgb(var(--glass-line))] bg-[rgb(var(--glass)_/_0.94)] p-3 shadow-[var(--shadow-soft)] backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            role="menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[rgb(var(--ink))] transition hover:bg-[rgb(var(--soft))]"
                role="menuitem"
                aria-current={active === link.label ? "page" : undefined}
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
