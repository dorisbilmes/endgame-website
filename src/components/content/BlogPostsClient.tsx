"use client";

import { useState } from "react";
import type { ContentItem } from "@/types";
import { Pagination } from "@/components/ui";
import { BlogPostCard } from "./BlogPostCard";
import { PostFilters } from "./PostFilters";
import { POSTS_PER_PAGE, EXCLUDED_TAGS } from "@/lib/constants";

interface Props {
  posts: ContentItem[];
}

export function BlogPostsClient({ posts }: Props) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Derive unique tags from all posts (excluding specified tags)
  const allTags = [...new Set(posts.flatMap((p) => p.frontmatter.tags || []))]
    .filter((tag) => !EXCLUDED_TAGS.includes(tag))
    .sort();

  // Filter posts by active tag
  const filteredPosts = activeTag
    ? posts.filter((p) => p.frontmatter.tags?.includes(activeTag))
    : posts;

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Reset to page 1 when filter changes
  const handleTagChange = (tag: string | null) => {
    setActiveTag(tag);
    setCurrentPage(1);
  };

  return (
    <div>
      <PostFilters
        tags={allTags}
        activeTag={activeTag}
        onTagChange={handleTagChange}
      />

      {/* Post Count */}
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Showing {paginatedPosts.length} of {filteredPosts.length} posts
      </p>

      {/* Blog Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Empty State */}
      {paginatedPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[var(--color-text-secondary)]">No posts found for this filter.</p>
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        className="mt-12"
      />
    </div>
  );
}
