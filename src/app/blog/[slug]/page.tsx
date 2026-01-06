import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getContentBySlug, getContentSlugs } from "@/lib/content";
import { mdxComponents, ShareArticle } from "@/components/content";

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
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      url: `https://www.endgame.io/blog/${slug}`,
      images: [
        {
          url: post.frontmatter.image || "/images/home/guide.png",
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [post.frontmatter.image || "/images/home/guide.png"],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getContentBySlug("blog", slug);
  if (!post) notFound();

  return (
    <article className="py-24 max-w-3xl mx-auto">
      <header className="mb-20 text-center flex flex-col items-center">
        <h1 className="text-[40px] font-medium text-[var(--color-text)] mb-4 leading-tight  mx-auto text-balance">
          {post.frontmatter.title}
        </h1>
        <div className="flex items-center gap-2 text-base text-[#91a6c2]">
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
      </header>

      <div className="prose max-w-none">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>

      <ShareArticle 
        title={post.frontmatter.title} 
        url={`https://www.endgame.io/blog/${slug}`} 
      />
    </article>
  );
}
