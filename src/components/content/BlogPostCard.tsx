/**
 * BlogPostCard Component
 *
 * Individual blog post card for grid displays.
 */

"use client";

import Link from "next/link";
import type { ContentItem } from "@/types";

interface BlogPostCardProps {
  post: ContentItem;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-glow group flex flex-col overflow-hidden"
    >
      {post.frontmatter.image && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={post.frontmatter.image}
            alt={post.frontmatter.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)] mb-3">
          <time>
            {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
          {post.frontmatter.tags?.[0] && (
            <>
              <span>·</span>
              <span>{post.frontmatter.tags[0]}</span>
            </>
          )}
        </div>
        <h2 className="text-[20px] font-semibold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
          {post.frontmatter.title}
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3">
          {post.frontmatter.description}
        </p>
      </div>
    </Link>
  );
}

