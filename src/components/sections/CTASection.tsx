"use client";

import { Button } from "@/components/ui";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  title = "Get started today",
  description = "Endgame is easy to set up, maintain, and use. It takes less than 5 minutes to get up and running.",
  buttonText = "Start using Endgame",
  buttonHref = "#"
}: CTASectionProps) {
  return (
    <section className="py-24 bg-[var(--color-canvas)] w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-6">{title}</h2>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-6">{description}</p>
        <Button href={buttonHref}>
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
