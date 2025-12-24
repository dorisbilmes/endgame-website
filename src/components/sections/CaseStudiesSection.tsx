"use client";

import Link from "next/link";
import { featuredCaseStudies } from "@/data/site-data";
import { Card } from "@/components/ui";

export function CaseStudiesSection() {
  return (
    <section className="py-24 bg-[var(--color-canvas)] w-full">
      <h2 className="text-[24px] lg:text-[32px] font-semibold text-[var(--color-text)] mb-12">
        The customer impact is real
      </h2>
      <div className="grid grid-cols-1 min-[1200px]:grid-cols-3 gap-6">
        {featuredCaseStudies.map((story) => (
          <Link key={story.id} href={`/case-studies/${story.slug}`} className="flex flex-col gap-6 group">
            <Card variant="glow" className="w-full aspect-[16/9] flex items-center justify-center p-8">
              <span className="text-xl md:text-2xl font-bold tracking-widest text-[var(--color-text)]">
                {story.company}
              </span>
            </Card>
            <div className="flex flex-col gap-4">
              <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">{story.title}</p>
              <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                Read story →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
