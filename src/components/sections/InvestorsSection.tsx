"use client";

import { investors } from "@/data/site-data";
import { Card } from "@/components/ui";

export function InvestorsSection() {
  return (
    <section className="py-24 bg-[var(--color-canvas)] w-full">
      <div className="mb-16 max-w-2xl">
        <h2 className="text-[24px] lg:text-[32px] font-semibold text-[var(--color-text)] mb-4">
          Backed by world class investors
        </h2>
        <p className="text-md text-[var(--color-text-secondary)]">
          We raised $47.5M from top tier VCs as well as executives from companies like Zoom, Airtable, Stripe, and Notion.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {investors.map((inv) => (
          <Card key={inv.id} variant="default" className="overflow-hidden">
            <div className="aspect-square relative overflow-hidden bg-zinc-800">
              <img src={inv.image} alt={inv.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4">
                <img src={inv.firmLogo} alt={inv.firm} className="h-6 w-auto brightness-0 invert opacity-90" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-[var(--color-text)]">{inv.name}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{inv.firm}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
