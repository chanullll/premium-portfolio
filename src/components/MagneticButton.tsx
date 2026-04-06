"use client";
import { motion } from "framer-motion";
import { useRef, useState, MouseEvent, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

export default function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    // Button eke size ekai, thiyena thanai gannawa
    const boundingRect = ref.current?.getBoundingClientRect(); 
    if (!boundingRect) return;
    const { height, width, left, top } = boundingRect;

    // Mouse eka button eke mada idan kochchara durinda thiyenne kiyala maninawa
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Ena durin 20% (0.2) k wage button eka e paththata adinawa
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    // Mouse eka ain kalama kalin thibba thanata yanawa
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      // Spring physics pawichchi karanawa nikan rubber ekak wage bounce wenna
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}