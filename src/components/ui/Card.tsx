/**
 * Card Component
 *
 * Flexible card component with glow effect variant.
 * Used for blog posts, case studies, feature cards, etc.
 */

import Link from "next/link";

type CardVariant = "default" | "glow" | "surface";

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
  as?: "div" | "article";
}

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-card)]",
  glow: "card-glow",
  surface:
    "bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-[var(--radius-card)]",
};

export function Card({
  children,
  variant = "default",
  href,
  className = "",
  onClick,
  as: Component = "div",
}: CardProps) {
  const combinedStyles = `${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`${combinedStyles} group`}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <Component
        className={`${combinedStyles} cursor-pointer`}
        onClick={onClick}
      >
        {children}
      </Component>
    );
  }

  return <Component className={combinedStyles}>{children}</Component>;
}

/**
 * Card.Image - Image section for cards
 */
interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: "16/9" | "4/3" | "square";
  className?: string;
  hoverScale?: boolean;
}

function CardImage({
  src,
  alt,
  aspectRatio = "16/9",
  className = "",
  hoverScale = false,
}: CardImageProps) {
  const aspectStyles = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    square: "aspect-square",
  };

  return (
    <div className={`${aspectStyles[aspectRatio]} overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${hoverScale ? "group-hover:scale-105 transition-transform duration-500" : ""}`}
      />
    </div>
  );
}

/**
 * Card.Content - Content section for cards
 */
interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

/**
 * Card.Title - Title for cards
 */
interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  hoverColor?: boolean;
}

function CardTitle({
  children,
  className = "",
  hoverColor = false,
}: CardTitleProps) {
  return (
    <h3
      className={`text-lg font-semibold text-[var(--color-text)] ${hoverColor ? "group-hover:text-[var(--color-accent)] transition-colors" : ""} ${className}`}
    >
      {children}
    </h3>
  );
}

/**
 * Card.Description - Description text for cards
 */
interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
  clamp?: number;
}

function CardDescription({
  children,
  className = "",
  clamp,
}: CardDescriptionProps) {
  const clampStyle = clamp ? `line-clamp-${clamp}` : "";
  return (
    <p
      className={`text-sm text-[var(--color-text-secondary)] ${clampStyle} ${className}`}
    >
      {children}
    </p>
  );
}

// Attach sub-components
Card.Image = CardImage;
Card.Content = CardContent;
Card.Title = CardTitle;
Card.Description = CardDescription;

