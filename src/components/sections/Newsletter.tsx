"use client";

import { useState } from "react";

interface NewsletterProps {
  title?: string;
  description?: string;
}

export function Newsletter({
  title = "Our newsletter",
  description = "Subscribe to our blog to learn how the best sales teams are using AI to improve their performance",
}: NewsletterProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-24 bg-[var(--color-canvas)] w-full">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-4">
          {title}
        </h2>
        <p className="text-base text-[var(--color-text-secondary)] mb-8">
          {description}
        </p>

        <form onSubmit={handleSubmit} className="flex max-w-lg mx-auto">
          <div className="flex-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="What's your work email?"
              className="w-full h-14 px-5 pr-12 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-l-[var(--radius-card)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
              required
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]">
              ···
            </span>
          </div>
          <button
            type="submit"
            className="h-14 px-6 bg-[var(--color-text)] text-[var(--color-canvas)] font-medium rounded-r-[var(--radius-card)] hover:bg-zinc-200 transition-colors flex items-center gap-1"
          >
            Go →
          </button>
        </form>
      </div>
    </section>
  );
}

