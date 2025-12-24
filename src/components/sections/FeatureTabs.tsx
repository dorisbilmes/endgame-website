"use client";

import { featureTabs } from "@/data/site-data";
import { Tabs } from "@/components/ui";
import { useAutoRotate, useIsMobile } from "@/hooks";

export function FeatureTabs() {
  const isMobileValue = useIsMobile(1024); // lg breakpoint
  // Treat null (SSR) as desktop to avoid hydration mismatch
  const isMobile = isMobileValue === true;
  const { activeIndex, setActiveIndex } = useAutoRotate({
    length: featureTabs.length,
    enabled: !isMobile, // Disable auto-rotate on mobile
  });

  // Transform featureTabs data to match Tabs component interface
  const tabItems = featureTabs.map((t) => ({
    id: t.id,
    title: t.title,
    description: t.description,
  }));

  return (
    <section className="py-24 bg-[var(--color-canvas)] w-full">
      <h2 className="text-[24px] lg:text-[32px] font-semibold text-[var(--color-text)] mb-16">
        One unified platform to empower<br />your entire organization
      </h2>

      {/* Mobile/Tablet: Stacked image-text pairs */}
      {isMobile ? (
        <div className="flex flex-col gap-12">
          {featureTabs.map((tab) => (
            <div key={tab.id} className="flex flex-col gap-4">
              <div className="w-full relative bg-[var(--color-surface-1)] rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border)]">
                <img
                  src={tab.backgroundImage}
                  alt=""
                  loading="lazy"
                  className="w-full h-auto block"
                />
                <div className="absolute inset-0 flex items-end justify-center p-2 pb-0 sm:p-3 sm:pb-0">
                  <img
                    src={tab.textImage}
                    alt=""
                    loading="lazy"
                    className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg"
                  />
                </div>
              </div>
              <div className="p-4 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-button)]">
                <h3 className="text-[18px] font-medium text-[var(--color-text)] mb-2">
                  {tab.title}
                </h3>
                <p className="text-[16px] text-[var(--color-text-secondary)]">
                  {tab.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop: Original tabs + single image layout */
        <>
          <Tabs
            tabs={tabItems}
            activeIndex={activeIndex}
            onTabChange={setActiveIndex}
            variant="compact"
            className="mb-12"
          />
          <div className="w-full relative bg-[var(--color-surface-1)] rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border)]">
            <img
              src={featureTabs[activeIndex].backgroundImage}
              alt=""
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 flex items-end justify-center p-4 lg:p-6 lg:pb-0">
              <img
                src={featureTabs[activeIndex].textImage}
                alt=""
                className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg"
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
