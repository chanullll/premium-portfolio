"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  // Mouse eke position eka track karanna
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouse eka passe yaddi podi spring (bounce) effect ekak denna
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Mouse pointer eka mada thiyaganna -16 (cursor eke palala 32n bagayak) adu karanawa
      mouseX.set(e.clientX - 16); 
      mouseY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border-2 border-purple-400 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center bg-purple-400/10 backdrop-blur-sm"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    />
  );
}