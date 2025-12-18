/**
 * Pagination Component
 *
 * Navigation for paginated content.
 */

"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  const buttonBaseStyles =
    "w-10 h-10 flex items-center justify-center rounded-full transition-all";
  const activeStyles =
    "bg-blue-500/20 border-blue-500/50 text-blue-400 border";
  const inactiveStyles =
    "border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[#1d4c7d]";
  const disabledStyles =
    "border-[var(--color-border)] text-[var(--color-border)] cursor-not-allowed";

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`${buttonBaseStyles} border ${
          currentPage === 1 ? disabledStyles : inactiveStyles
        }`}
        aria-label="Previous page"
      >
        ←
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
          className={`${buttonBaseStyles} text-sm ${
            page === currentPage
              ? activeStyles
              : page === "..."
                ? "text-[var(--color-text-secondary)] cursor-default"
                : inactiveStyles
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`${buttonBaseStyles} border ${
          currentPage === totalPages ? disabledStyles : inactiveStyles
        }`}
        aria-label="Next page"
      >
        →
      </button>
    </div>
  );
}

