"use client";

import { useRef, useState, useEffect } from "react";

interface Value {
  icon: string;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: "♡",
    title: "Start with the Customer",
    description:
      "We place our customers at the heart of our work, striving to understand their needs and deliver solutions that make a real difference.",
  },
  {
    icon: "✈",
    title: "Add Value Quickly",
    description:
      "We believe in taking action and delivering meaningful results promptly, maximizing the impact of our efforts.",
  },
  {
    icon: "◎",
    title: "Challenge with Care",
    description:
      "We foster an environment of open communication where ideas are freely exchanged and thoughtfully challenged to achieve the best outcomes.",
  },
  {
    icon: "⬡",
    title: "Be an Owner",
    description:
      "We take responsibility for our work, holding ourselves accountable and contributing to the success of the entire team.",
  },
  {
    icon: "✦",
    title: "Stay Curious",
    description:
      "We are committed to continuous learning and growth, embracing new ideas and seeking opportunities to expand our knowledge.",
  },
];

const iconColors = [
  "text-pink-400",
  "text-purple-400",
  "text-emerald-400",
  "text-cyan-400",
  "text-amber-400",
];

export function ValuesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-[var(--color-canvas)] w-full">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-4">
          What drives us?
        </h2>
        <p className="text-base text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
          Our operating principles are the foundation of everything we do. They
          guide our approach to projects, influence our decision-making, and
          shape how we interact with each other and our customers.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Gradient Fade - only show when can scroll left */}
        {canScrollLeft && (
          <div 
            className="absolute left-0 top-0 bottom-4 w-48 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(to right, var(--color-canvas) 0%, rgba(1,16,29,0.8) 40%, rgba(1,16,29,0) 100%)" }}
          />
        )}

        {/* Right Gradient Fade - only show when can scroll right */}
        {canScrollRight && (
          <div 
            className="absolute right-0 top-0 bottom-4 w-48 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(to left, var(--color-canvas) 0%, rgba(1,16,29,0.8) 40%, rgba(1,16,29,0) 100%)" }}
          />
        )}

        {/* Left Arrow - only show when can scroll left */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-full text-[var(--color-text)] hover:border-[var(--color-accent)] transition-colors"
            aria-label="Scroll left"
          >
            ←
          </button>
        )}

        {/* Right Arrow - only show when can scroll right */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-full text-[var(--color-text)] hover:border-[var(--color-accent)] transition-colors"
            aria-label="Scroll right"
          >
            →
          </button>
        )}

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className="flex-shrink-0 w-[320px] h-[340px] bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 flex flex-col"
            >
              {/* Icon */}
              <div className={`text-2xl mb-auto ${iconColors[index]}`}>
                {value.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
