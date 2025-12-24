"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { mainNavLinks } from "@/data/site-data";
import { Button } from "@/components/ui";
import { SCROLL_THRESHOLD } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
      // Close mobile menu immediately when scrolling begins
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[rgba(5,20,33,0.8)] backdrop-blur-[4px]"
            : "bg-transparent"
        } ${scrolled && !mobileMenuOpen ? "shadow-[0_1px_0_0_#142332]" : ""}`}
      >
        <div className="container-app h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/endgame-logo.svg"
              alt="Endgame"
              className="h-7 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
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

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="#" variant="secondary" size="sm" className="rounded-lg">
              Go to app
            </Button>
            <Button href="#" variant="primary" size="sm" className="rounded-lg">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-[var(--color-text)]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              {/* Top line - rotates to form X */}
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              {/* Bottom line - rotates to form X */}
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Outside nav for proper layering */}
      <div
        className={`fixed top-14 left-0 right-0 z-40 lg:hidden bg-[rgba(5,20,33,0.8)] backdrop-blur-[4px] transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="py-6 pb-6 flex flex-col items-center">
          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-4">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-[#202d3c]">
            <Button
              href="#"
              variant="secondary"
              size="sm"
              className="w-45 justify-center rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Go to app
            </Button>
            <Button
              href="#"
              variant="primary"
              size="sm"
              className="w-45 justify-center rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
