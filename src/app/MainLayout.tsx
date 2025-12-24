"use client";

import { usePathname } from "next/navigation";
import { Navbar, Footer } from "@/components/layout";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSignupPage = pathname === "/signup";

  if (isSignupPage) {
    return (
      <>
        <Navbar />
        <main className="flex-grow flex flex-col w-full">{children}</main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 flex-grow flex flex-col items-center w-full">
        <div className="container-app w-full">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

