"use client";

import { clientLogos } from "@/data/site-data";

export function LogoGrid() {
  return (
    <section className="py-20 bg-[var(--color-canvas)] w-full">
      <p className="text-center text-base text-[var(--color-text-secondary)] mb-10">
        Trusted everyday by the world's leading revenue organizations
      </p>
      {/* Mobile/Tablet: 2-column grid */}
      <div className="grid grid-cols-2 gap-3 xl:hidden">
        {clientLogos.map((logo) => (
          <div 
            key={logo.name} 
            className="flex items-center justify-center h-[90px] bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl"
          >
            <img src={logo.image} alt={logo.label} className={`${logo.size} w-auto object-contain`} />
          </div>
        ))}
      </div>
      {/* Desktop: horizontal row */}
      <div className="hidden xl:flex gap-4">
        {clientLogos.map((logo, i) => (
          <div 
            key={logo.name} 
            className={`flex-1 flex items-center justify-center h-[90px] bg-[var(--color-surface-2)] border border-[var(--color-border)] ${
              i === 0 ? "rounded-l-2xl rounded-r-lg" : i === clientLogos.length - 1 ? "rounded-r-2xl rounded-l-lg" : "rounded-lg"
            }`}
          >
            <img src={logo.image} alt={logo.label} className={`${logo.size} w-auto object-contain`} />
          </div>
        ))}
      </div>
    </section>
  );
}
