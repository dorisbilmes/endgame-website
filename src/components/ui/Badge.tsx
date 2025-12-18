/**
 * Badge Component
 *
 * Small label/tag for categories, status indicators, and filter buttons.
 */

interface BadgeProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "filter";
}

export function Badge({
  children,
  active = false,
  onClick,
  className = "",
  variant = "filter",
}: BadgeProps) {
  const baseStyles =
    "px-4 py-2 rounded-full text-sm transition-all";

  const variantStyles = {
    default:
      "bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] border border-[var(--color-border)]",
    filter: active
      ? "bg-blue-500/20 border-blue-500/50 text-blue-400 border"
      : "border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[#1d4c7d]",
  };

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}

