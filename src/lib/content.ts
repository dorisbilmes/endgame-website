/**
 * Content Utilities
 * 
 * Functions for loading and processing MDX content from the content/ directory.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ContentItem } from "@/types";

const contentDir = path.join(process.cwd(), "content");

export type ContentType = "blog" | "case-studies";

// Re-export ContentItem type for convenience
export type { ContentItem } from "@/types";

/**
 * Get all content items of a specific type, sorted by date (newest first)
 */
export function getContent(type: ContentType): ContentItem[] {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const { data, content } = matter(fs.readFileSync(path.join(dir, filename), "utf8"));
      return { slug, frontmatter: data, content };
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

/**
 * Get a single content item by slug
 */
export function getContentBySlug(type: ContentType, slug: string): ContentItem | null {
  const filePath = path.join(contentDir, type, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  return { slug, frontmatter: data, content };
}

/**
 * Get all slugs for a content type (for generateStaticParams)
 */
export function getContentSlugs(type: ContentType): string[] {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}
