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
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[rgba(5,20,33,0.8)] backdrop-blur-[4px]"
            : "bg-transparent"
        } ${scrolled && !mobileMenuOpen ? "border-b border-[var(--color-border-light)]" : ""}`}
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

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="#" variant="secondary" size="sm">
              Go to app
            </Button>
            <Button href="#" variant="primary" size="sm">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-[var(--color-text)]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Outside nav for proper layering */}
      {mobileMenuOpen && (
        <div
          className="fixed top-14 left-0 right-0 z-40 md:hidden border-b border-[var(--color-border-light)]"
          style={{
            backgroundColor: "rgba(5, 20, 33, 0.85)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div className="p-6 flex flex-col gap-6">
            {/* Navigation Links */}
            <div className="flex flex-col items-center gap-4">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="flex gap-3">
              <Button
                href="#"
                variant="secondary"
                size="sm"
                className="flex-1 justify-center rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Go to app
              </Button>
              <Button
                href="#"
                variant="primary"
                size="sm"
                className="flex-1 justify-center rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
