import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader"; // <- Aluthen import kala

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chanul | Premium Portfolio",
  description: "Creative Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased cursor-none`}>
        {/* 1. Udinma Preloader eka enawa */}
        <Preloader />
        
        {/* 2. Custom Cursor eka */}
        <CustomCursor /> 
        
        {/* 3. Mulu site eka (Smooth scroll athule) */}
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}