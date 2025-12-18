import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Endgame",
    template: "%s | Endgame",
  },
  description: "Revenue intelligence platform for modern sales teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col font-sans`}
      >
        <Navbar />
        <main className="pt-16 flex-grow flex flex-col items-center w-full">
          <div className="container-app">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
