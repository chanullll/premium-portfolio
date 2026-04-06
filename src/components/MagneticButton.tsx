"use client";
import { motion } from "framer-motion";
import { useRef, useState, MouseEvent, ReactNode } from "react";
import { useUiSounds } from "@/hooks/useUiSounds"; // <- Aluth sounds tika genawa

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

export default function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { playHover, playClick } = useUiSounds(); // <- Hook eka pawichchi karanawa

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const boundingRect = ref.current?.getBoundingClientRect(); 
    if (!boundingRect) return;
    const { height, width, left, top } = boundingRect;

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const handleMouseEnter = () => {
    playHover(); // Mouse eka athulata eddi hover sound eka
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={reset}
      onClick={playClick} // Click karaddi click sound eka
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}