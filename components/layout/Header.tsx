"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-300",
        scrolled
          ? "bg-ink/80 backdrop-blur border-b border-smoke"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-[1600px] items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl uppercase tracking-tight leading-none"
          aria-label={`${BUSINESS.name} — home`}
        >
          B2T<span className="text-blood">·</span>BOXING
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="stamp text-bone/70 hover:text-bone transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/pay" className="hidden md:inline-flex">
            Get Started
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 text-bone"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden fixed inset-0 top-16 md:top-20 z-30 bg-ink border-t border-smoke">
          <nav className="flex flex-col px-5 py-8 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display uppercase text-4xl py-3 border-b border-smoke hover:text-blood transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-8">
              <Button
                href="/pay"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
