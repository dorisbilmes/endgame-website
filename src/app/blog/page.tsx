import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { BlogPostsClient } from "@/components/content";
import { Newsletter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on revenue intelligence, sales strategy, and AI-powered GTM.",
};

export default function BlogPage() {
  const posts = getContent("blog");

  return (
    <>
      <section className="py-24">
        <h1 className="text-4xl font-semibold text-[var(--color-text)] mb-4">Blog</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-12 max-w-2xl">
          Insights on revenue intelligence, sales strategy, and AI-powered GTM.
        </p>
        <BlogPostsClient posts={posts} />
      </section>

      <Newsletter />
    </>
  );
}
