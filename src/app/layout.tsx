import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor"; // <- Meka import kala

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
      {/* cursor-none damma normal arrow eka nopeni yanna */}
      <body className={`${inter.className} antialiased cursor-none`}>
        <CustomCursor /> {/* <- Apige aluth cursor eka */}
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}