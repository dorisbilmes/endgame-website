"use client";

import { Button } from "@/components/ui";

interface HeroSectionProps {
  title?: React.ReactNode;
  description?: string;
  buttonText?: string | null;
  buttonHref?: string;
  videoSrc?: string | null;
  children?: React.ReactNode;
  align?: "left" | "center";
}

export function HeroSection({
  title = <>Revenue superintelligence<br />for modern GTM teams</>,
  description = "Elevate the performance of your entire revenue organization with intelligence that's trained on all your deals, calls, and sales frameworks.",
  buttonText = "Get a demo",
  buttonHref = "#",
  videoSrc = "/images/home/endgame-product-video.mp4",
  children,
  align = "left",
}: HeroSectionProps) {
  const isCentered = align === "center";

  return (
    <section className={`pt-16 sm:pt-20 lg:pt-30 pb-0 relative overflow-visible w-full ${isCentered ? "text-center" : "text-left"}`}>
      <div className={`flex flex-col w-full max-w-full ${isCentered ? "items-center" : "items-start"}`}>
        <h1 className={`font-sans text-[32px] lg:text-[40px] font-medium tracking-tight leading-tight text-[var(--color-text)] mb-4 max-w-[800px] ${isCentered ? "mx-auto" : ""}`}>
          {title}
        </h1>
        <p className={`text-base text-[var(--color-text-secondary)] mb-9 max-w-[600px] leading-relaxed ${isCentered ? "mx-auto" : ""}`}>
          {description}
        </p>
        {buttonText && (
          <Button href={buttonHref} className="mb-8">
            {buttonText}
          </Button>
        )}
        {children}
        {videoSrc && (
          <div className="w-full mt-8">
            <div className="w-full border border-[var(--color-border-light)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-surface-2)]">
              <video src={videoSrc} autoPlay loop muted playsInline className="w-full h-full object-contain block" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
