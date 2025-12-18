"use client";

import { features } from "@/data/site-data";
import { Tabs } from "@/components/ui";
import { useAutoRotate } from "@/hooks";

export function FeaturesSection() {
  const { activeIndex, setActiveIndex } = useAutoRotate({
    length: features.length,
  });

  // Transform features data to match Tabs component interface
  const tabItems = features.map((f) => ({
    id: f.id,
    title: f.title,
    description: f.description,
  }));

  return (
    <section id="features" className="py-20 bg-[var(--color-canvas)] w-full">
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-12">
        The only AI answer engine<br />that knows your sales strategy
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-start">
        <div className="w-full bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-[var(--radius-card)] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[665px]">
          <video
            src={features[activeIndex].videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <Tabs
          tabs={tabItems}
          activeIndex={activeIndex}
          onTabChange={setActiveIndex}
          showProgress
          variant="default"
        />
      </div>
    </section>
  );
}
