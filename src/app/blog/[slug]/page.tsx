import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import { mdxComponents } from "@/components/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getContentSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getContentBySlug("blog", slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getContentBySlug("blog", slug);
  if (!post) notFound();

  return (
    <article className="py-24 max-w-3xl mx-auto">
      <Link href="/blog" className="text-[var(--color-accent)] hover:underline text-sm mb-8 inline-block">
        ← Back to blog
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mb-4">
          <time>
            {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
          {post.frontmatter.author && (
            <>
              <span>·</span>
              <span>{post.frontmatter.author}</span>
            </>
          )}
        </div>
        <h1 className="text-[32px] font-bold text-[var(--color-text)] mb-4">{post.frontmatter.title}</h1>
        <p className="text-xl text-[var(--color-text-secondary)]">{post.frontmatter.description}</p>

        {post.frontmatter.tags && (
          <div className="flex gap-2 mt-6">
            {post.frontmatter.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[var(--color-surface-2)] text-xs text-[var(--color-text-secondary)] rounded-full border border-[var(--color-border)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose max-w-none">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
