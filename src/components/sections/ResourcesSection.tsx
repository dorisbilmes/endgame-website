"use client";

import { resourceCards } from "@/data/site-data";
import { Card } from "@/components/ui";

export function ResourcesSection() {
  return (
    <section className="py-24 bg-[var(--color-canvas)] w-full">
      <h2 className="text-[24px] lg:text-[32px] font-semibold text-[var(--color-text)] mb-12">
        Learn more about Endgame
      </h2>
      <div className="grid grid-cols-1 min-[1270px]:grid-cols-4 gap-6">
        {resourceCards.map((card) => (
          <Card
            key={card.title}
            href={card.href}
            external={true}
            variant="flat"
            className="p-6 flex flex-col overflow-[var(--overflow-clip-fallback,clip)]"
          >
            <Card.Title className="mb-2 text-[20px] font-semibold">
              {card.title}
            </Card.Title>
            <Card.Description className="text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
              {card.description}
            </Card.Description>
          </Card>
        ))}
      </div>
    </section>
  );
}

