import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/lib/content";
import { Newsletter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "See how leading companies use Endgame to transform their revenue operations.",
};

export default function CaseStudiesPage() {
  const studies = getContent("case-studies");

  return (
    <>
      <section className="py-24">
        <Link href="/" className="text-[var(--color-accent)] hover:underline text-sm mb-8 inline-block">
          ← Back
        </Link>
        <h1 className="text-4xl font-semibold text-[var(--color-text)] mb-4">Case Studies</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-12 max-w-2xl">
          See how leading companies use Endgame to transform their revenue operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studies.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group flex flex-col gap-6">
              <div className="card-glow w-full aspect-[16/9] flex items-center justify-center p-8">
                <span className="text-xl md:text-2xl font-bold tracking-widest text-[var(--color-text)] uppercase">
                  {study.frontmatter.company}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {study.frontmatter.title}
                </p>
                <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                  Read story →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
