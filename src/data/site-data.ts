/**
 * Centralized Site Data
 * 
 * Single source of truth for all static content.
 * Update this file to modify team members, navigation, features, etc.
 */

import type {
  Stat,
  TeamMember,
  Investor,
  ClientLogo,
  FeaturedCaseStudy,
  FeaturedBlogPost,
  Feature,
  FeatureTab,
  NavLink,
  FooterLinkGroup,
  SocialLink,
} from "@/types";

// =============================================================================
// NAVIGATION
// =============================================================================

export const mainNavLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Docs", href: "/docs" },
    ],
  },
  {
    title: "Legal & security",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Acceptable Use", href: "/acceptable-use" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/endgame-ai", external: true },
  { label: "X/Twitter", href: "https://twitter.com/endgame", external: true },
  { label: "Contact Us", href: "/contact", external: false },
];

// =============================================================================
// COMPANY INFO
// =============================================================================

export const companyStats: Stat[] = [
  { value: "$47.5M", label: "Funding" },
  { value: "2021", label: "Founded" },
  { value: "21", label: "Team Members" },
];

export const teamMembers: TeamMember[] = [
  { name: "Geo Avendano", role: "GTM", image: "/images/team/geo.png" },
  { name: "Alex Bilmes", role: "CEO and co-founder", image: "/images/team/alex.png" },
  { name: "Tara Brodene", role: "Head of People", image: "/images/team/tara.png" },
  { name: "Andy Boyle", role: "Engineering", image: "/images/team/andy.png" },
  { name: "Sean Cardenas", role: "GTM", image: "/images/team/sean.png" },
  { name: "Charlotte Caswell", role: "Operations", image: "/images/team/charlotte.png" },
  { name: "James Estes", role: "Engineering", image: "/images/team/james.png" },
  { name: "John Hungerford", role: "Engineering", image: "/images/team/john.png" },
  { name: "Aditya Khargonekar", role: "COO", image: "/images/team/aditya.png" },
  { name: "Kerry Kurian", role: "Engineering", image: "/images/team/kerry.png" },
  { name: "Dustin Larimer", role: "Head of Design", image: "/images/team/dustin.png" },
  { name: "Viktor Lipchenko", role: "Engineering", image: "/images/team/viktor.png" },
  { name: "Dirk McNealy", role: "Engineering", image: "/images/team/dirk.png" },
  { name: "Ki Moon", role: "Head of RevOps", image: "/images/team/ki.png" },
  { name: "Dan Reverri", role: "Engineering", image: "/images/team/dan.png" },
  { name: "Paul Richard", role: "Engineering", image: "/images/team/paul.png" },
  { name: "Ellie Sceeles", role: "Engineering", image: "/images/team/ellie.png" },
  { name: "Kate Schaefer", role: "Product", image: "/images/team/kate.png" },
  { name: "Christian Schlensker", role: "Engineering", image: "/images/team/christian.png" },
  { name: "Ryan Tyer", role: "Engineering", image: "/images/team/ryan.png" },
  { name: "Kyle Wild", role: "CTO", image: "/images/team/kyle.png" },
  { name: "You", role: "", image: "/images/team/you.png" },
];

export const investors: Investor[] = [
  { id: 1, name: "Gustav von Sydow", firm: "EQT Ventures", image: "/images/investors/gustav.png", firmLogo: "/images/investors/EQT.png" },
  { id: 2, name: "Kobie Fuller", firm: "Upfront Ventures", image: "/images/investors/kobie.png", firmLogo: "/images/investors/upfront.png" },
  { id: 3, name: "Naomi Ionita", firm: "Menlo Ventures", image: "/images/investors/naomi.png", firmLogo: "/images/investors/menlo.png" },
  { id: 4, name: "Sandhya Hegde", firm: "Unusual Ventures", image: "/images/investors/sandhya.png", firmLogo: "/images/investors/unusual.png" },
];

export const clientLogos: ClientLogo[] = [
  { name: "scale", label: "Scale", image: "/images/logos/scale-logo.svg", size: "h-10" },
  { name: "betterup", label: "BetterUp", image: "/images/logos/betterup-logo.svg", size: "h-8" },
  { name: "mux", label: "MUX", image: "/images/logos/mux-logo.svg", size: "h-8" },
  { name: "accuris", label: "ACCURIS", image: "/images/logos/accuris-logo.svg", size: "h-6" },
  { name: "hex", label: "HEX", image: "/images/logos/hex-logo.svg", size: "h-8" },
  { name: "montecarlo", label: "MONTE CARLO", image: "/images/logos/monte-carlo-logo.svg", size: "h-8" },
];

// =============================================================================
// FEATURED CONTENT (Homepage)
// =============================================================================

export const featuredCaseStudies: FeaturedCaseStudy[] = [
  { id: 1, company: "MONTE CARLO", title: "How Monte Carlo achieved over 80% AI adoption across their GTM team", slug: "monte-carlo" },
  { id: 2, company: "BETTERUP", title: "From AI prototypes to production systems: How BetterUp scaled what worked", slug: "betterup" },
  { id: 3, company: "HEX", title: "How Hex turned scattered sales data into connected context", slug: "hex" },
];

export const featuredBlogPosts: FeaturedBlogPost[] = [
  {
    id: 1,
    tag: "Guide",
    title: "The Prototype Gap: How to build Endgame yourself",
    description: "\"This is cool. But couldn't we just build this ourselves in GPT or Claude?\"",
    image: "/images/home/guide.png",
    slug: "prototype-gap",
  },
  {
    id: 2,
    tag: "Company Updates",
    title: "Revenue superintelligence is here",
    description: "CROs have spent the last two years trying to make their teams AI-native. Most have failed to see any real adoption or impact. Until now.",
    image: "/images/home/company-updates.png",
    slug: "revenue-superintelligence",
  },
  {
    id: 3,
    tag: "Guide",
    title: "What happens when your sales AI actually knows your business",
    description: "We recently wrote about how Templates help reps execute your sales methodology consistently. But there's another layer...",
    image: "/images/home/bussiness-guide.png",
    slug: "what-happens-when-your-sales-ai-actually-knows-your-business",
  },
];

// =============================================================================
// FEATURES DATA
// =============================================================================

export const features: Feature[] = [
  { id: 0, title: "Ask anything", description: "Get instant answers powered by Salesforce, Gong, LinkedIn, Slack, Google Drive, email, news, 10-Ks, and more", videoSrc: "/images/home/Ask-Anything.mp4" },
  { id: 1, title: "Brief everyone", description: "Schedule personal digests to hit inboxes, so your team doesn't have to ask", videoSrc: "/images/home/Breif-Everyone.mp4" },
  { id: 2, title: "Access anywhere", description: "Use Endgame via browser, Slack, or MCP so you can work anywhere", videoSrc: "/images/home/Access-Anywhere.mp4" },
];

export const featureTabs: FeatureTab[] = [
  { id: 0, title: "Sales reps", description: "Research accounts, prep for calls, and close deals faster", backgroundImage: "/images/home/sales-rep-background.png", textImage: "/images/home/sales-rep-text.png" },
  { id: 1, title: "Account managers", description: "Prep for QBRs, spot expansions, and keep customers growing", backgroundImage: "/images/home/account-managers-background.png", textImage: "/images/home/account-managers-text.png" },
  { id: 2, title: "Revenue leaders", description: "Coach at scale, identify risks, and drive consistent execution", backgroundImage: "/images/home/revenue-leaders-background.png", textImage: "/images/home/revenue-leaders-text.png" },
  { id: 3, title: "Ops & enablement", description: "See what's working and standardize best practices", backgroundImage: "/images/home/op-background.png", textImage: "/images/home/ops-text.png" },
];
