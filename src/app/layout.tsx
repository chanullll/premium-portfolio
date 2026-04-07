import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader"; 
import FloatingNav from "@/components/FloatingNav";
import NoiseOverlay from "@/components/NoiseOverlay"; 
import CommandPalette from "@/components/CommandPalette"; 
import { Analytics } from "@vercel/analytics/react"; 
import DynamicTabTitle from "@/components/DynamicTabTitle";
import ConsoleMessage from "@/components/ConsoleMessage"; 
import TimezoneBadge from "@/components/TimezoneBadge"; 

const inter = Inter({ subsets: ["latin"] });

// Premium SEO Setup for Multiple Targeted Roles
export const metadata: Metadata = {
  metadataBase: new URL("https://premium-portfolio-six.vercel.app"),
  title: "Chanul Dilmith | Software Engineer & Creative Developer",
  description: "Software Engineering undergrad actively seeking internships. Specializing as a Full Stack Engineer, Frontend Developer, and Creative Web Developer.",
  keywords: [
    "Chanul Dilmith", 
    "Ranasingha Chanul Dilmith", 
    "Software Engineer Intern", 
    "Full Stack Engineer", 
    "Frontend Developer",
    "Web Development Intern",
    "Creative Developer", 
    "Next.js",
    "Sri Lanka"
  ],
  openGraph: {
    title: "Chanul Dilmith | Software Engineer",
    description: "Building scalable backend systems and God-Tier frontend digital experiences. Available for Software Engineering & Web Development Internships.",
    type: "website",
    locale: "en_US",
    url: "https://premium-portfolio-six.vercel.app", 
    siteName: "Chanul Dilmith Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chanul Dilmith | Full Stack & Frontend Engineer",
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
        <TimezoneBadge />
        <FloatingNav />
        <CommandPalette /> 
        <DynamicTabTitle />
        <ConsoleMessage /> 
        <SmoothScrolling>{children}</SmoothScrolling>
        <Analytics />
      </body>
    </html>
  );
}