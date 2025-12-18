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
  return getContentSlugs("case-studies").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getContentBySlug("case-studies", slug);
  if (!study) return { title: "Not Found" };
  return {
    title: `${study.frontmatter.company} Case Study`,
    description: study.frontmatter.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getContentBySlug("case-studies", slug);
  if (!study) notFound();

  return (
    <article className="py-24 max-w-3xl mx-auto">
      <Link href="/case-studies" className="text-[var(--color-accent)] hover:underline text-sm mb-8 inline-block">
        ← Back to case studies
      </Link>

      <header className="mb-12">
        <span className="text-sm font-bold tracking-widest text-[var(--color-accent)] uppercase mb-4 block">
          {study.frontmatter.company}
        </span>
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">{study.frontmatter.title}</h1>
        <p className="text-xl text-[var(--color-text-secondary)]">{study.frontmatter.description}</p>

        {study.frontmatter.metrics && (
          <div className="grid grid-cols-3 gap-4 mt-8 p-6 bg-[var(--color-surface-2)] rounded-[var(--radius-card)] border border-[var(--color-border)]">
            {study.frontmatter.metrics.map((metric: { label: string; value: string }) => (
              <div key={metric.label} className="text-center">
                <div className="text-2xl font-bold text-[var(--color-text)]">{metric.value}</div>
                <div className="text-sm text-[var(--color-text-secondary)]">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
      </header>

      <div className="prose max-w-none">
        <MDXRemote source={study.content} components={mdxComponents} />
      </div>
    </article>
  );
}
