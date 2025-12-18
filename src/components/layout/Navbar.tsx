"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { mainNavLinks } from "@/data/site-data";
import { Button } from "@/components/ui";
import { SCROLL_THRESHOLD } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[var(--color-surface-1)]/80 backdrop-blur-[4px] border-b border-[var(--color-border-light)]" : "bg-transparent"
    }`}>
      <div className="container-app h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/endgame-logo.svg" alt="Endgame" className="h-7 w-auto brightness-0 invert" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {mainNavLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-sm font-medium text-[var(--color-text)] hover:text-zinc-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <Button href="#" variant="secondary" size="sm" className="hidden sm:flex">
            Go to app
          </Button>
          <Button href="#" variant="primary" size="sm">
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
}
