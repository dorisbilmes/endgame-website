/**
 * MDX Components
 * 
 * Custom components for rendering MDX content (blog posts, case studies).
 */

import React from "react";

export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold text-[var(--color-text)] mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold text-[var(--color-text)] mt-8 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-medium text-[var(--color-text)] mt-6 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 text-[var(--color-text-secondary)] mb-4 space-y-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 text-[var(--color-text-secondary)] mb-4 space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-[var(--color-text-secondary)]" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-[var(--color-accent)] pl-4 italic text-[var(--color-text-secondary)] my-6" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-[var(--color-surface-2)] px-1.5 py-0.5 rounded text-sm text-[var(--color-accent)]" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-[var(--color-surface-2)] p-4 rounded-[var(--radius-card)] overflow-x-auto my-4 border border-[var(--color-border)]" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-white underline underline-offset-2 hover:opacity-80 transition-opacity" {...props} />
  ),
  hr: () => <hr className="border-[var(--color-border)] my-8" />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="rounded-[var(--radius-card)] my-6 w-full" {...props} />
  ),
};

interface CalloutProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}

export function Callout({ children, type = "info" }: CalloutProps) {
  const colors = {
    info: "border-[var(--color-accent)] bg-[var(--color-accent)]/10",
    warning: "border-yellow-500 bg-yellow-500/10",
    success: "border-green-500 bg-green-500/10",
  };
  return (
    <div className={`border-l-4 ${colors[type]} p-4 rounded-r-[var(--radius-card)] my-6`}>
      {children}
    </div>
  );
}

