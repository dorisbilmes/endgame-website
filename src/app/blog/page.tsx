import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { BlogPostsClient } from "@/components/content";
import { HeroSection, Newsletter } from "@/components/sections";

export const metadata: Metadata = {
  title: "News & updates",
  // description: "Insights on revenue intelligence, sales strategy, and AI-powered GTM.",
};

export default function BlogPage() {
  const posts = getContent("blog");

  return (
    <>
      <HeroSection
        title="News & updates"
        // description="Insights on revenue intelligence, sales strategy, and AI-powered GTM."
        buttonText={null}
        videoSrc={null}
      >
        <BlogPostsClient posts={posts} />
      </HeroSection>

      <Newsletter />
    </>
  );
}
