"use client";

import { featureTabs } from "@/data/site-data";
import { Tabs } from "@/components/ui";
import { useAutoRotate } from "@/hooks";

export function FeatureTabs() {
  const { activeIndex, setActiveIndex } = useAutoRotate({
    length: featureTabs.length,
  });

  // Transform featureTabs data to match Tabs component interface
  const tabItems = featureTabs.map((t) => ({
    id: t.id,
    title: t.title,
    description: t.description,
  }));

  return (
    <section className="py-24 bg-[var(--color-canvas)] w-full">
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-16">
        One unified platform to empower<br />your entire organization
      </h2>
      <Tabs
        tabs={tabItems}
        activeIndex={activeIndex}
        onTabChange={setActiveIndex}
        variant="compact"
        className="mb-12"
      />
      <div className="w-full relative aspect-[16/10] bg-[var(--color-surface-1)] rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border)]">
        <img
          src={featureTabs[activeIndex].backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-20">
          <img
            src={featureTabs[activeIndex].textImage}
            alt=""
            className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
