"use client";

import { Navbar, Footer } from "@/components/layout";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-16 flex-grow flex flex-col items-center w-full relative overflow-hidden">
        <div className="container-app w-full relative z-10">
          {children}
        </div>
        
        {/* Bottom gradient overlay that blends with content */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[500px] pointer-events-none z-0"
          style={{
            opacity: 0.25,
            willChange: "transform",
          }}
        >
          <div 
            className="absolute bottom-[-150px] left-[-20%] right-[-20%] h-[400px]"
            style={{
            background: "linear-gradient(to right, #0088aa 0%, #003366 50%, #440099 100%)",
            filter: "blur(140px)",
            WebkitMaskImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
            maskImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

