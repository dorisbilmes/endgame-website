/**
 * Centralized Type Definitions
 * 
 * All shared TypeScript interfaces and types for the application.
 * Import from '@/types' in any file.
 */

// =============================================================================
// NAVIGATION
// =============================================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

// =============================================================================
// COMPANY DATA
// =============================================================================

export interface Stat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Investor {
  id: number;
  name: string;
  firm: string;
  image: string;
  firmLogo: string;
}

export interface ClientLogo {
  name: string;
  label: string;
  image: string;
  size: string;
}

// =============================================================================
// CONTENT DATA
// =============================================================================

export interface FeaturedCaseStudy {
  id: number;
  company: string;
  title: string;
  slug: string;
}

export interface FeaturedBlogPost {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

// =============================================================================
// FEATURE DATA
// =============================================================================

export interface Feature {
  id: number;
  title: string;
  description: string;
  videoSrc: string;
}

export interface FeatureTab {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
  textImage: string;
}

// =============================================================================
// CONTENT (MDX)
// =============================================================================

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string | Date;
  author?: string;
  tags?: string[];
  image?: string;
}

export interface CaseStudyFrontmatter {
  title: string;
  description: string;
  date: string | Date;
  company?: string;
  industry?: string;
  image?: string;
  metrics?: Array<{ label: string; value: string }>;
}

export interface ContentItem {
  slug: string;
  frontmatter: Record<string, any>;
  content: string;
}

