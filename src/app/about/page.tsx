import type { Metadata } from "next";
import { TeamSection, InvestorsSection, CTASection } from "@/components/sections";
import { companyStats } from "@/data/site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the team building Endgame and our mission to transform revenue intelligence.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-24 text-left relative overflow-visible w-full">
        <div className="flex flex-col items-start w-full">
          <h1 className="text-[40px] font-medium tracking-tight leading-tight text-[var(--color-text)] mb-4 max-w-[800px]">
            We help humans<br />think and work better
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] mb-12 max-w-[600px] leading-relaxed">
            We're not interested in building AI SDRs or filling inboxes with more spam. Instead, we help sellers become the trusted advisors their buyers need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
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
        </div>
      </section>
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
