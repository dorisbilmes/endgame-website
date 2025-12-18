"use client";

import Link from "next/link";
import { footerLinkGroups, socialLinks } from "@/data/site-data";

export function Footer() {
  return (
    <footer className="bg-[var(--color-canvas)] py-16 w-full mt-auto border-t border-[var(--color-border-light)]">
      <div className="container-app">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col gap-4 max-w-[500px]">
            <Link href="/" className="flex items-center gap-3">
              <img src="/images/endgame-logo.svg" alt="Endgame" className="h-[30px] w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-[var(--color-text-secondary)]">
              © {new Date().getFullYear()} Endgame. Automate deep research and prep with AI—100x faster
            </p>
          </div>
          
          {/* Link Groups */}
          <div className="flex gap-16 md:gap-24 flex-wrap">
            {footerLinkGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h4 className="text-[var(--color-text)] text-sm font-medium mb-1">{group.title}</h4>
                {group.links.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            
            {/* Social Links */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[var(--color-text)] text-sm font-medium mb-1">Connect</h4>
              {socialLinks.map((link) => (
                link.external ? (
                  <a 
                    key={link.href}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
