"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useCursorStore } from "@/store/useCursorStore";
import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
  const { setCursor, resetCursor } = useCursorStore();

  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-white selection:bg-purple-500/30">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="z-10 flex flex-col items-center text-center px-4">
        {/* 404 Floating Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[150px] md:text-[250px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 leading-none select-none drop-shadow-2xl"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Lost in the <span className="text-purple-400">Digital Void.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-md mb-10">
            The page you are looking for has drifted into the unknown. Let's get you back to the base.
          </p>

          <MagneticButton>
            <Link
              href="/"
              onMouseEnter={() => setCursor("", "button")}
              onMouseLeave={resetCursor}
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-purple-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              Return to Base
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Floating particles background effect */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full blur-[1px]"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 
        }}
        className="absolute bottom-40 right-32 w-3 h-3 bg-white rounded-full blur-[2px]"
      />
    </main>
  );
}