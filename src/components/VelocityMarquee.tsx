"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Scroll karaddi speed eka wadi wena logic eka
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1; // Udata scroll karaddi reverse wenawa
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1; // Pallahata scroll karaddi normal yanawa
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden tracking-[-2px] leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className="scroller font-black uppercase text-[10vw] flex whitespace-nowrap flex-nowrap items-center" style={{ x }}>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
      </motion.div>
    </div>
  );
}

export default function VelocityMarquee() {
  return (
    <section className="relative w-full py-24 bg-[#050505] overflow-hidden flex flex-col gap-4 z-10">
      {/* First row going right to left */}
      <ParallaxText baseVelocity={-2}>
        <span className="text-white">CREATIVE</span>{" "}
        <span className="text-transparent" style={{ WebkitTextStroke: "2px #a855f7" }}>DEVELOPER</span>{" "}
        <span className="text-purple-400">✦</span>
      </ParallaxText>
      
      {/* Second row going left to right (Positive velocity) */}
      <ParallaxText baseVelocity={2}>
        <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>FRONTEND</span>{" "}
        <span className="text-white">ENGINEER</span>{" "}
        <span className="text-purple-400">✦</span>
      </ParallaxText>
    </section>
  );
}