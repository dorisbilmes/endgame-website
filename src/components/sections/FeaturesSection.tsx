"use client";

import { features } from "@/data/site-data";
import { Tabs } from "@/components/ui";
import { useAutoRotate, useIsMobile } from "@/hooks";

export function FeaturesSection() {
  const isMobileValue = useIsMobile(1024); // lg breakpoint
  // Treat null (SSR) as desktop to avoid hydration mismatch
  const isMobile = isMobileValue === true;
  const { activeIndex, setActiveIndex } = useAutoRotate({
    length: features.length,
    enabled: !isMobile, // Disable auto-rotate on mobile
  });

  // Transform features data to match Tabs component interface
  const tabItems = features.map((f) => ({
    id: f.id,
    title: f.title,
    description: f.description,
  }));

  return (
    <section id="features" className="py-20 bg-[var(--color-canvas)] w-full">
      <h2 className="text-[24px] lg:text-[32px] font-semibold text-[var(--color-text)] mb-12">
        The only AI answer engine<br />that knows your sales strategy
      </h2>

      {/* Mobile/Tablet: Stacked video-text pairs */}
      {isMobile ? (
        <div className="flex flex-col gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col gap-4">
              <div className="w-full bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-[var(--radius-card)] overflow-hidden">
                <video
                  src={feature.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-auto block"
                />
              </div>
              <div className="p-4 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-button)]">
                <h3 className="text-[18px] font-medium text-[var(--color-text)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-[var(--color-text-secondary)]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop: Original single-video + tabs layout */
        <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-8 xl:gap-16 items-start">
          <div className="w-full bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-[var(--radius-card)] overflow-hidden">
            <video
              src={features[activeIndex].videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto block"
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
      )}
    </section>
  );
}
