"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Lenis setup eka
    const lenis = new Lenis({
      duration: 1.5, // Scroll wena welaawa (wedi karanna karanna smooth wadi)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Lassanata nawathinna
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Page eken yaddi clean karanna
    };
  }, []);

  return <>{children}</>;
}