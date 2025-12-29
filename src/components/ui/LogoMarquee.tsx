"use client";

import { clientLogos } from "@/data/site-data";

export function LogoMarquee() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
        WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      <div className="flex w-max animate-marquee">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center px-6 lg:px-8"
          >
            <img
              src={logo.image}
              alt={logo.label}
              className={`${logo.size} w-auto object-contain`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
