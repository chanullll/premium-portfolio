"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursorStore } from "@/store/useCursorStore"; 

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const { variant, text } = useCursorStore(); 

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const cursorSize = variant === "project" ? 100 : variant === "button" ? 64 : 32;
      mouseX.set(e.clientX - cursorSize / 2);
      mouseY.set(e.clientY - cursorSize / 2);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY, isVisible, variant]);

  if (!isVisible) return null;

  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(255, 255, 255, 1)", 
      border: "0px solid rgba(192, 132, 252, 0)",
      mixBlendMode: "difference" as const,
    },
    project: {
      width: 100,
      height: 100,
      backgroundColor: "rgba(255, 255, 255, 1)", 
      border: "0px solid rgba(192, 132, 252, 0)",
      mixBlendMode: "normal" as const, 
    },
    button: {
      width: 64,
      height: 64,
      backgroundColor: "rgba(192, 132, 252, 0)", 
      border: "2px solid rgba(192, 132, 252, 1)", 
      mixBlendMode: "normal" as const,
    }
  };

  return (
    <motion.div
      variants={variants}
      animate={variant} 
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      // added 'hidden md:flex' so it only shows on larger screens
      className="hidden md:flex fixed top-0 left-0 rounded-full pointer-events-none z-[9999] items-center justify-center overflow-hidden"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      {variant === "project" && (
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="text-black text-sm font-bold tracking-widest"
        >
          {text}
        </motion.span>
      )}
    </motion.div>
  );
}