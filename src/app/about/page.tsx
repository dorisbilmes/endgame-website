import type { Metadata } from "next";
import { HeroSection, TeamSection, InvestorsSection, CTASection } from "@/components/sections";
import { companyStats } from "@/data/site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the team building Endgame and our mission to transform revenue intelligence.",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title={<>We help humans<br />think and work better</>}
        description="We're not interested in building AI SDRs or filling inboxes with more spam. Instead, we help sellers become the trusted advisors their buyers need."
        buttonText={null}
        videoSrc={null}
      >
        <div className="grid grid-cols-1 min-[1200px]:grid-cols-3 gap-4 w-full">
          {companyStats.map((stat) => (
            <div 
              key={stat.label} 
              className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-card)] py-6 px-8 text-center"
            >
              <div className="text-2xl font-semibold text-[var(--color-text)] mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </HeroSection>
      <TeamSection />
      <InvestorsSection />
      <CTASection
        title="Join the team"
        description="We're always looking for talented people who are passionate about transforming how sales teams work."
        buttonText="See open roles"
        buttonHref="/careers"
      />
    </>
  );
}
