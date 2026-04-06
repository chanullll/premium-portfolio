import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader"; 
import FloatingNav from "@/components/FloatingNav";
import NoiseOverlay from "@/components/NoiseOverlay"; 

const inter = Inter({ subsets: ["latin"] });

// Premium SEO Setup
export const metadata: Metadata = {
  title: "Chanul | Creative Developer",
  description: "God-Tier Frontend Engineer specializing in Next.js, 3D interactions, and premium digital experiences.",
  keywords: ["Chanul", "Frontend Developer", "Next.js Portfolio", "Creative Developer", "Sri Lanka"],
  openGraph: {
    title: "Chanul | Creative Developer",
    description: "Building digital realities with code.",
    type: "website",
    locale: "en_US",
    // Oyage Vercel link eka dapu dawasata meka update karanna puluwan
    // url: "https://chanul.dev", 
    siteName: "Chanul Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chanul | Creative Developer",
    description: "Building digital realities with code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* md:cursor-none witarai, phone wala default cursor eka pennanawa */}
      <body className={`${inter.className} antialiased md:cursor-none bg-[#050505]`}>
        <Preloader />
        <CustomCursor /> 
        <NoiseOverlay />
        <FloatingNav />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}