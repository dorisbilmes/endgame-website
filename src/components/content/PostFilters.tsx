/**
 * PostFilters Component
 *
 * Tag-based filter tabs for blog posts.
 */

"use client";

import { Badge } from "@/components/ui";

interface PostFiltersProps {
  tags: string[];
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
}

export function PostFilters({ tags, activeTag, onTagChange }: PostFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Badge
        active={activeTag === null}
        onClick={() => onTagChange(null)}
      >
        All
      </Badge>
      {tags.map((tag) => (
        <Badge
          key={tag}
          active={activeTag === tag}
          onClick={() => onTagChange(tag)}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}

