"use client";

import { featuredBlogPosts } from "@/data/site-data";
import { Card, Badge } from "@/components/ui";

export function ContentCards() {
  return (
    <section className="py-24 bg-[var(--color-canvas)] w-full">
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-12">
        Stay on the frontier
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredBlogPosts.map((item) => (
          <Card 
            key={item.id}
            href={`/blog/${item.slug}`}
            variant="glow"
            className="flex flex-col h-full overflow-hidden"
          >
            <div className="relative w-full aspect-[16/9] bg-[var(--color-surface-3)] overflow-hidden border-b border-[var(--color-border)]">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <Badge
                variant="default"
                className="absolute top-4 right-4 bg-[var(--color-surface-1)]/90 backdrop-blur-sm px-3 py-1 text-xs"
              >
                {item.tag}
              </Badge>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
