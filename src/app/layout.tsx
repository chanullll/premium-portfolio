import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader"; 
import FloatingNav from "@/components/FloatingNav";
import NoiseOverlay from "@/components/NoiseOverlay"; 

const inter = Inter({ subsets: ["latin"] });

// Premium SEO Setup for Chanul Dilmith
export const metadata: Metadata = {
  title: "Chanul Dilmith | Software Engineer & Creative Developer",
  description: "Software Engineering undergrad actively seeking internship opportunities. Specializing in Next.js, 3D interactions, and crafting premium digital experiences.",
  keywords: [
    "Chanul Dilmith", 
    "Ranasingha Chanul Dilmith", 
    "Software Engineering Intern", 
    "Frontend Developer", 
    "Creative Developer", 
    "Next.js Portfolio", 
    "Sri Lanka"
  ],
  openGraph: {
    title: "Chanul Dilmith | Premium Software Engineer",
    description: "Software Engineering undergrad building God-Tier digital experiences. Available for internships.",
    type: "website",
    locale: "en_US",
    // url: "https://chanul.dev", // Update this when you get your domain
    siteName: "Chanul Dilmith Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chanul Dilmith | Software Engineer",
    description: "Building digital realities with code. Available for internships.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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