import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection, FounderMessage, ValuesCarousel, CTASection } from "@/components/sections";
import { investors } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Endgame - We're a team of passionate professionals helping sellers become trusted advisors their buyers rely on.",
};

const founderMessage = `At Endgame, we believe trust and human connection matter more than ever in today's automated world. We're transforming enterprise sales by turning every seller into a trusted advisor.

Our AI-powered platform unifies data from emails, calls, CRM, news, 10-Ks, and more to instantly connect the dots for sales reps, empowering them to build meaningful customer relationships through deep understanding.

Join us to tackle complex challenges with market-leading solutions.

We have raised $47.5M since we started in 2021 and are backed by Menlo Ventures, Upfront, Unusual Ventures, and EQT Ventures.`;

const openRoles = [
  {
    title: "Backend Platform Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-Time",
    href: "#",
  },
  {
    title: "Forward Deployed Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-Time",
    href: "#",
  },
  {
    title: "Founding Product Marketer",
    team: "GTM",
    location: "Bay Area",
    type: "Full-Time",
    href: "#",
  },
  {
    title: "Senior Account Executive",
    team: "GTM",
    location: "Bay Area",
    type: "Full-Time",
    href: "#",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Careers"
        description="We're a team of passionate professionals helping sellers become trusted advisors their buyers rely on."
        buttonText="See open roles"
        buttonHref="#open-roles"
        videoSrc={null}
      />

      {/* Founder Message */}
      <FounderMessage
        message={founderMessage}
        name="Alex Bilmes"
        role="CEO and co-founder"
        image="/images/team/alex.png"
      />

      {/* Investor Logos */}
      <section className="py-20 bg-[var(--color-canvas)] w-full">
        <p className="text-center text-base text-[var(--color-text-secondary)] mb-10">
          Backed by world-class investors
        </p>
        {/* Desktop: Flex row with custom rounded corners */}
        <div className="hidden lg:flex gap-4">
          {investors.map((investor, i) => (
            <div
              key={investor.id}
              className={`flex-1 flex items-center justify-center h-[110px] bg-[var(--color-surface-2)] border border-[var(--color-border)] ${
                i === 0 ? "rounded-l-2xl rounded-r-lg" : i === investors.length - 1 ? "rounded-r-2xl rounded-l-lg" : "rounded-lg"
              }`}
            >
              <img
                src={investor.firmLogo}
                alt={investor.firm}
                className="h-8 w-auto brightness-0 invert opacity-80"
              />
            </div>
          ))}
        </div>
        {/* Mobile/Tablet: Responsive grid */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {investors.map((investor) => (
            <div
              key={investor.id}
              className="flex items-center justify-center h-[90px] sm:h-[110px] bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg"
            >
              <img
                src={investor.firmLogo}
                alt={investor.firm}
                className="h-6 sm:h-8 w-auto brightness-0 invert opacity-80"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Values Carousel */}
      <ValuesCarousel />

      {/* Open Roles */}
      <section id="open-roles" className="py-24 bg-[var(--color-canvas)] w-full">
        <h2 className="text-[24px] lg:text-[32px] font-semibold text-[var(--color-text)] mb-12">
          Open roles
        </h2>

        {/* Engineering */}
        <div className="mb-12">
          <h3 className="text-xl font-medium text-[var(--color-text)] mb-4">
            Engineering
          </h3>
          <div className="flex flex-col gap-4">
            {openRoles
              .filter((role) => role.team === "Engineering")
              .map((role) => (
                <div
                  key={role.title}
                  className="flex items-center justify-between p-6 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-card)] hover:border-[var(--color-accent)]/50 transition-colors"
                >
                  <div>
                    <h4 className="text-lg font-medium text-[var(--color-text)] mb-1">
                      {role.title}
                    </h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {role.type} · {role.location}
                    </p>
                  </div>
                  <Link
                    href={role.href}
                    className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] font-medium text-sm flex items-center gap-1 transition-colors"
                  >
                    Apply →
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* GTM */}
        <div>
          <h3 className="text-xl font-medium text-[var(--color-text)] mb-4">
            GTM
          </h3>
          <div className="flex flex-col gap-4">
            {openRoles
              .filter((role) => role.team === "GTM")
              .map((role) => (
                <div
                  key={role.title}
                  className="flex items-center justify-between p-6 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-card)] hover:border-[var(--color-accent)]/50 transition-colors"
                >
                  <div>
                    <h4 className="text-lg font-medium text-[var(--color-text)] mb-1">
                      {role.title}
                    </h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {role.type} · {role.location}
                    </p>
                  </div>
                  <Link
                    href={role.href}
                    className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] font-medium text-sm flex items-center gap-1 transition-colors"
                  >
                    Apply →
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* More About Us CTA */}
      <CTASection
        title="More about us"
        description="Learn more about Endgame and how we help humans think and work better"
        buttonText="About Endgame"
        buttonHref="/about"
      />
    </>
  );
}
