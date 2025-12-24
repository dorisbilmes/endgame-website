"use client";

import { teamMembers } from "@/data/site-data";
import { Button } from "@/components/ui";

export function TeamSection() {
  return (
    <section className="py-40 bg-[var(--color-canvas)] w-full">
      <div className="flex flex-col min-[1200px]:flex-row justify-between items-start min-[1200px]:items-center gap-8 pb-16 mb-16 border-b border-[var(--color-border-light)]">
        <h2 className="text-[24px] lg:text-[32px] font-medium text-[var(--color-text)] max-w-2xl">
          We're a team of passionate professionals helping sellers become trusted advisors their buyers rely on.
        </h2>
        <Button href="/careers">
          See open roles
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-12">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-zinc-800 mb-4">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <div className="font-medium text-sm text-[var(--color-text)]">{member.name}</div>
            {member.role && <div className="text-xs text-[var(--color-text-secondary)]">{member.role}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
