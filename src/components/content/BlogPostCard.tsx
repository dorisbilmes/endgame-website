/**
 * BlogPostCard Component
 *
 * Individual blog post card for grid displays.
 * Styled to match the ContentCards on the main page.
 */

"use client";

import type { ContentItem } from "@/types";
import { Card } from "@/components/ui";

interface BlogPostCardProps {
  post: ContentItem;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const tag = post.frontmatter.tags?.[0];

  return (
    <Card
      href={`/blog/${post.slug}`}
      variant="flat"
      className="flex flex-col h-full overflow-hidden"
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        {post.frontmatter.image && (
          <img
            src={post.frontmatter.image}
            alt={post.frontmatter.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        {tag && (
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
            {tag}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
          {post.frontmatter.title}
        </h3>
        <p 
          className="text-sm text-[#d5e0e8] overflow-hidden"
          style={{
            maxHeight: "3.5em",
            mask: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
            WebkitMask: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
          }}
        >
          {post.frontmatter.description}
        </p>
      </div>
    </Card>
  );
}
