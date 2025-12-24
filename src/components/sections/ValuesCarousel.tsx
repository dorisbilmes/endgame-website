"use client";

import { useRef, useState, useEffect } from "react";

// SVG Icon Components
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
      <path d="M178,42c-21,0-39.26,9.47-50,25.34C117.26,51.47,99,42,78,42a60.07,60.07,0,0,0-60,60c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102A48.05,48.05,0,0,1,78,54c20.28,0,37.31,10.83,44.45,28.27a6,6,0,0,0,11.1,0C140.69,64.83,157.72,54,178,54a48.05,48.05,0,0,1,48,48C226,157.72,144.41,207.64,128,217.11Z" />
    </svg>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
      <path d="M221.86,47.24a14,14,0,0,0-13.11-13.1c-12.31-.73-43.77.39-69.88,26.5L133.52,66H74.35a13.9,13.9,0,0,0-9.89,4.1L30.11,104.44a14,14,0,0,0,7.94,23.76l39.13,5.46,45.16,45.16L127.8,218a14,14,0,0,0,23.76,7.92l34.35-34.35a13.91,13.91,0,0,0,4.1-9.89V122.48l5.35-5.35h0C221.46,91,222.59,59.56,221.86,47.24ZM38.11,115a2,2,0,0,1,.49-2L72.94,78.58A2,2,0,0,1,74.35,78h47.17L77.87,121.64l-38.14-5.32A1.93,1.93,0,0,1,38.11,115ZM178,181.65a2,2,0,0,1-.59,1.41L143.08,217.4a2,2,0,0,1-3.4-1.11l-5.32-38.16L178,134.48Zm8.87-73h0L128,167.51,88.49,128l58.87-58.88a78.47,78.47,0,0,1,60.69-23A2,2,0,0,1,209.88,48,78.47,78.47,0,0,1,186.88,108.64ZM100,190.31C95.68,199.84,81.13,222,40,222a6,6,0,0,1-6-6c0-41.13,22.16-55.68,31.69-60a6,6,0,1,1,5,10.92c-7,3.17-22.53,13.52-24.47,42.91,29.39-1.94,39.74-17.52,42.91-24.47a6,6,0,1,1,10.92,5Z" />
    </svg>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
      <path d="M221.45,40.19a6,6,0,0,0-5.64-5.64C140.43,30.11,80.14,52.71,54.53,95c-17.44,28.79-16.76,62.8,1.79,96.2L35.76,211.76a6,6,0,1,0,8.48,8.48L64.8,199.68c17.27,9.59,34.7,14.41,51.49,14.41A85.38,85.38,0,0,0,161,201.47C203.29,175.86,225.88,115.57,221.45,40.19Zm-66.66,151c-24.08,14.58-52.64,14.37-81.13-.39l90.59-90.59a6,6,0,0,0-8.48-8.48L65.18,182.34c-14.76-28.49-15-57-.39-81.13,22.68-37.43,76.63-57.8,145-54.95C212.59,114.58,192.22,168.54,154.79,191.21Z" />
    </svg>
  );
}

function SearchPlusIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
      <path d="M150,112a6,6,0,0,1-6,6H118v26a6,6,0,0,1-12,0V118H80a6,6,0,0,1,0-12h26V80a6,6,0,0,1,12,0v26h26A6,6,0,0,1,150,112Zm78.24,116.24a6,6,0,0,1-8.48,0l-51.38-51.38a86.15,86.15,0,1,1,8.48-8.48l51.38,51.38A6,6,0,0,1,228.24,228.24ZM112,186a74,74,0,1,0-74-74A74.09,74.09,0,0,0,112,186Z" />
    </svg>
  );
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={className} fill="currentColor">
      <path d="M232,66H206V48a6,6,0,0,0-6-6H56a6,6,0,0,0-6,6V66H24A14,14,0,0,0,10,80V96a38,38,0,0,0,38,38h5.14A78,78,0,0,0,122,189.75V218H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V189.75c32.44-2.52,59.43-25.3,68.62-55.75H208a38,38,0,0,0,38-38V80A14,14,0,0,0,232,66ZM48,122A26,26,0,0,1,22,96V80a2,2,0,0,1,2-2H50v34a80.87,80.87,0,0,0,.65,10Zm146-10.9c0,36.62-29.38,66.63-65.5,66.9A66,66,0,0,1,62,112V54H194ZM234,96a26,26,0,0,1-26,26h-2.77a78.45,78.45,0,0,0,.77-10.9V78h26a2,2,0,0,1,2,2Z" />
    </svg>
  );
}

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
}

const values: Value[] = [
  {
    icon: <HeartIcon className="w-8 h-8" />,
    title: "Start with the Customer",
    description:
      "We place our customers at the heart of our work, striving to understand their needs and deliver solutions that make a real difference.",
    colorClass: "text-[#be3733]",
  },
  {
    icon: <RocketIcon className="w-8 h-8" />,
    title: "Add Value Quickly",
    description:
      "We believe in taking action and delivering meaningful results promptly, maximizing the impact of our efforts.",
    colorClass: "text-[#b667f0]",
  },
  {
    icon: <LeafIcon className="w-8 h-8" />,
    title: "Challenge with Care",
    description:
      "We foster an environment of open communication where ideas are freely exchanged and thoughtfully challenged to achieve the best outcomes.",
    colorClass: "text-[#50ad6a]",
  },
  {
    icon: <TrophyIcon className="w-8 h-8" />,
    title: "Be an Owner",
    description:
      "We take responsibility for our work, holding ourselves accountable and contributing to the success of the entire team.",
    colorClass: "text-[#008bf9]",
  },
  {
    icon: <SearchPlusIcon className="w-8 h-8" />,
    title: "Stay Curious",
    description:
      "We are committed to continuous learning and growth, embracing new ideas and seeking opportunities to expand our knowledge.",
    colorClass: "text-[#ea845e]",
  },
];

// Card component for reuse
function ValueCard({ value }: { value: Value }) {
  return (
    <div 
      className="flex-shrink-0 w-[320px] lg:w-[357px] h-[400px] lg:h-[380px] relative bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 flex flex-col"
      style={{ scrollSnapAlign: "center" }}
    >
      {/* Icon */}
      <div className={`mb-auto ${value.colorClass}`}>
        {value.icon}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-[18px] lg:text-[20px] font-semibold text-[var(--color-text)] mb-3">
          {value.title}
        </h3>
        <p className="text-[16px] text-[var(--color-text-secondary)] leading-relaxed">
          {value.description}
        </p>
      </div>
    </div>
  );
}

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
      window.addEventListener("resize", checkScroll);
      return () => {
        ref.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 365; // 357px card + 8px gap (gap-2)
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
        <h2 className="text-[24px] lg:text-[32px] font-semibold text-[var(--color-text)] mb-4">
          What drives us?
        </h2>
        <p className="text-base text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
          Our operating principles are the foundation of everything we do. They
          guide our approach to projects, influence our decision-making, and
          shape how we interact with each other and our customers.
        </p>
      </div>

      <div className="relative">
        {/* Left Gradient Fade */}
        {canScrollLeft && (
          <div 
            className="absolute left-0 top-0 bottom-4 w-24 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(to right, var(--color-canvas) 0%, rgba(1, 16, 29, 0.3) 30%, rgba(1, 16, 29, 0) 100%)" }}
          />
        )}

        {/* Right Gradient Fade */}
        {canScrollRight && (
          <div 
            className="absolute right-0 top-0 bottom-4 w-24 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(to left, var(--color-canvas) 0%, rgba(1, 16, 29, 0.3) 30%, rgba(1, 16, 29, 0) 100%)" }}
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
          className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ 
            maskImage: `linear-gradient(to right, ${canScrollLeft ? "rgba(0, 0, 0, 0) 0%" : "rgb(0, 0, 0) 0%"}, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, ${canScrollRight ? "rgba(0, 0, 0, 0) 100%" : "rgb(0, 0, 0) 100%"})`,
            WebkitMaskImage: `linear-gradient(to right, ${canScrollLeft ? "rgba(0, 0, 0, 0) 0%" : "rgb(0, 0, 0) 0%"}, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, ${canScrollRight ? "rgba(0, 0, 0, 0) 100%" : "rgb(0, 0, 0) 100%"})`,
            scrollbarWidth: "none", 
            msOverflowStyle: "none" 
          }}
        >
          {values.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
