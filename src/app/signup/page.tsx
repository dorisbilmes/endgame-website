"use client";

import { useState } from "react";
import { LogoMarquee } from "@/components/ui";

export default function SignupPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
  };

  return (
    <section className="section min-h-[calc(100vh-200px)] flex items-center">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 w-full">
        {/* Left Column: Form & Logos */}
        <div className="flex flex-col justify-center lg:w-1/2 xl:w-2/5">
          <div className="max-w-md">
            <h1 className="text-[32px] lg:text-[40px] font-semibold text-white mb-6 tracking-tight leading-tight">
              Get a demo
            </h1>
            <p className="text-[16px] text-[#d5e0e8] mb-12 leading-relaxed">
              See how Endgame can help you today and peek into our roadmap (it might just blow your mind a little)
            </p>

            <form onSubmit={handleSubmit} className="relative mb-10 max-w-sm">
              <div 
                className="flex items-center bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl p-1 focus-within:border-[rgba(255,255,255,0.3)] transition-colors h-[54px]"
                suppressHydrationWarning
              >
                <input
                  type="email"
                  placeholder="What's your work email?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-transparent border-none outline-none text-white px-4 placeholder:text-zinc-500 text-[15px]"
                  required
                  data-lpignore="true"
                  data-form-type="other"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="bg-white text-[#01101D] px-5 h-full rounded-lg font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2 whitespace-nowrap text-sm"
                >
                  Go <span className="text-lg">→</span>
                </button>
              </div>
            </form>

            {/* Logo Carousel */}
            <div className="mb-8 lg:mb-0">
              <LogoMarquee />
            </div>
          </div>
        </div>

        {/* Right Column: UI Preview - visible on all screens */}
        <div className="flex lg:w-1/2 xl:w-3/5 relative items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-[900px] animate-fade-in">
            <img 
              src="/images/home/signup-page.png" 
              alt="Endgame Platform UI" 
              className="w-full h-auto object-contain"
              style={{
                borderColor: "#012647",
                borderLeftWidth: "1px",
                borderRightWidth: "1px",
                borderStyle: "solid",
                borderTopWidth: "1px",
                borderBottomWidth: "0px",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                mask: "radial-gradient(100% 100% at 0% 0%, rgb(0, 0, 0) 72.1759%, rgba(0, 0, 0, 0) 99.356%)",
                WebkitMask: "radial-gradient(100% 100% at 0% 0%, rgb(0, 0, 0) 72.1759%, rgba(0, 0, 0, 0) 99.356%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
