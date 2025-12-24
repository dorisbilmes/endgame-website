"use client";

import { featuredBlogPosts } from "@/data/site-data";
import { Card } from "@/components/ui";

export function ContentCards() {
  return (
    <section className="py-24 bg-[var(--color-canvas)] w-full">
      <h2 className="text-[24px] lg:text-[32px] font-semibold text-[var(--color-text)] mb-12">
        Stay on the frontier
      </h2>
      <div className="grid grid-cols-1 min-[1200px]:grid-cols-3 gap-6">
        {featuredBlogPosts.map((item) => (
          <Card 
            key={item.id}
            href={`/blog/${item.slug}`}
            variant="flat"
            className="flex flex-col h-full overflow-hidden"
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              {item.tag && (
                <span 
                  className="absolute top-4 right-4 text-sm text-[var(--color-text)]"
                  style={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    backgroundColor: "rgba(7, 32, 54, 0.24)",
                    borderRadius: "332px",
                    padding: "4px 16px",
                    border: "none",
                  }}
                >
                  {item.tag}
                </span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                {item.title}
              </h3>
              <p 
                className="text-sm text-[#d5e0e8] overflow-hidden"
                style={{
                  maxHeight: "3.5em",
                  mask: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
                  WebkitMask: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
                }}
              >
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
