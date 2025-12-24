"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup with:", email);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden pt-14">
      {/* Left Column: Form & Logos */}
      <div 
        className="flex flex-col items-end self-stretch flex-[1_0_0px] gap-[80px] h-auto overflow-hidden p-0 relative w-[1px] z-[1] justify-center lg:pl-20 lg:pr-20"
        style={{ placeContent: "flex-start center" }}
      >
        <div className="max-w-md w-full">
          <h1 className="text-[48px] lg:text-[56px] font-semibold text-white mb-6 tracking-tight">
            Get a demo
          </h1>
          <p className="text-lg text-[#d5e0e8] mb-12 leading-relaxed">
            See how Endgame can help you today and peek into our roadmap (it might just blow your mind a little)
          </p>

          <form onSubmit={handleSubmit} className="relative mb-20 max-w-sm">
            <div className="flex items-center bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl p-1 focus-within:border-[rgba(255,255,255,0.3)] transition-colors h-[54px]">
              <input
                type="email"
                placeholder="What's your work email?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-transparent border-none outline-none text-white px-4 placeholder:text-zinc-500 text-[15px]"
                required
              />
              <button
                type="submit"
                className="bg-white text-[#01101D] px-5 h-full rounded-lg font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2 whitespace-nowrap text-sm"
              >
                Go <span className="text-lg">→</span>
              </button>
            </div>
          </form>

          {/* Customer Logos */}
          <div className="flex items-center gap-10 opacity-60">
            <img src="/images/logos/mux-logo.svg" alt="Mux" className="h-5 w-auto brightness-0 invert" />
            <img src="/images/logos/accuris-logo.svg" alt="Accuris" className="h-3 w-auto brightness-0 invert" />
            <img src="/images/logos/hex-logo.svg" alt="Hex" className="h-5 w-auto brightness-0 invert" />
          </div>
        </div>
      </div>

      {/* Right Column: UI Preview */}
      <div className="hidden lg:flex flex-[1.6] relative items-center justify-center p-8 xl:p-12 overflow-hidden">
        <div className="relative w-full max-w-[1100px] aspect-[1.24213/1] animate-fade-in translate-x-12 xl:translate-x-20">
          <img 
            src="/images/home/signup-page.png" 
            alt="Endgame Platform UI" 
            className="absolute left-0 top-0 w-[1026px] max-w-none object-cover"
            style={{
              borderBottomWidth: "0px",
              borderColor: "#012647",
              borderLeftWidth: "1px",
              borderRightWidth: "1px",
              borderStyle: "solid",
              borderTopWidth: "1px",
              aspectRatio: "1.24213 / 1",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              bottom: "-6px",
              flex: "0 0 auto",
              mask: "radial-gradient(100% 100% at 0% 0%, rgb(0, 0, 0) 72.1759%, rgba(0, 0, 0, 0) 99.356%)",
              WebkitMask: "radial-gradient(100% 100% at 0% 0%, rgb(0, 0, 0) 72.1759%, rgba(0, 0, 0, 0) 99.356%)",
              overflow: "clip",
              willChange: "transform"
            }}
          />
        </div>
      </div>
    </div>
  );
}

