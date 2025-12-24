import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/lib/content";
import { HeroSection, Newsletter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Customers",
  description: "See how leading companies use Endgame to transform their revenue operations.",
};

const customerQuotes = [
  {
    image: "/images/logos/jordan.png",
    quote: "Endgame has become the OS for our revenue team, with over 80% adoption. We've replaced consumer AI tools for everything from meeting prep to customer presentations to business analysis. We’re on a mission to be an AI-native company and Endgame has been a huge accelerant.",
    name: "Jordan Van Horn",
    title: "Co-founder, COO at Monte Carlo",
  },
  {
    image: "/images/logos/austin.png",
    quote: "What used to take an entire account team off what they were doing for hours, Endgame did in a few minutes. Within 20 minutes, we're handing something to an executive and they're making introductions.",
    name: "Austin Johnsey",
    title: "Director of GTM Systems at BetterUp",
  },
  {
    image: "/images/logos/john.png",
    quote: "We evaluated over a dozen AI tools. Almost all of them focused on low-level tasks and email automation, but Endgame was different. Their entire approach is about getting the knowledge layer right, which gives us a level of accuracy we couldn't find anywhere else.",
    name: "John Messina",
    title: "VP Revenue at Hex",
  },
  {
    image: "/images/logos/avtar.png",
    quote: "Most AI vendors we evaluated were shallow on the data side. Endgame integrates deeply with Salesforce, Gong, and our enablement content, which gives us data quality our teams actually trust.",
    name: "Avtar Varma",
    title: "VP of Global RevOps at Benchling",
  },
  {
    image: "/images/logos/matt-baker.png",
    quote: "Endgame is the biggest shift in sales tech we've seen in the last decade, at least since CRM. In our first 90 days, we automated over 400 account plans, leading to a 2.5x increase in pipeline generation versus the prior year.",
    name: "Matt Baker",
    title: "VP of GTM Strategy at Accuris",
  },
  {
    image: "/images/logos/julio.png",
    quote: "Every meeting at Scale is extremely high stakes—each could be worth tens of millions. Synthesizing all our account context and validating our strategy through Endgame before walking in is critical.",
    name: "Julio Bermúdez",
    title: "Global VP of GTM, Enterprise at Scale",
  },
];

export default function CaseStudiesPage() {
  const allStudies = getContent("case-studies");
  // Only show Monte Carlo, BetterUp, and Hex
  const studies = allStudies.filter((study) =>
    ["monte-carlo", "betterup", "hex"].includes(study.slug)
  );

  return (
    <>
      <HeroSection
        title="Customers"
        description="See how leading companies use Endgame to transform their revenue operations."
        buttonText={null}
        videoSrc={null}
      >
        <div className="flex flex-col gap-12 w-full">
          {/* Case Study Cards */}
          <div className="grid grid-cols-1 min-[1200px]:grid-cols-3 gap-6 w-full">
            {studies.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group flex flex-col gap-6">
                <div className="card-glow w-full aspect-[16/9] flex items-center justify-center p-8">
                  <span className="text-xl md:text-2xl font-bold tracking-widest text-[var(--color-text)] uppercase">
                    {study.frontmatter.company}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    {study.frontmatter.title}
                  </p>
                  <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    Read story →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Customer Quotes */}
          <div className="grid grid-cols-1 min-[1200px]:grid-cols-3 gap-6 w-full">
            {customerQuotes.map((customer) => (
              <div key={customer.name} className="card-glow-static p-8 flex flex-col gap-6">
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed italic">
                  "{customer.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-[var(--color-text)]">
                      {customer.name}
                    </span>
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      {customer.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </HeroSection>

      <Newsletter />
    </>
  );
}
