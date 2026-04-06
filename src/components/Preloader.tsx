"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Thathpara 2k athulatha 0 idan 100ta yanna math logic eka
    const duration = 2000; 
    const interval = 20; 
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(100, Math.floor((currentStep / steps) * 100));
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // 100% unata passe podi welawak (0.5s) inna denawa eka kiyawanna
        setTimeout(() => setIsLoading(false), 500); 
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      // Loading iwara unama mulu screen ekama udaata gihin nathi wenawa
      animate={{ y: isLoading ? 0 : "-100vh" }}
      // Supiri smooth transition ekak (ease curve eka)
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
      className="fixed inset-0 z-[9990] flex flex-col items-center justify-center bg-[#050505] text-white"
    >
      <div className="flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4"
        >
          Initializing Portfolio
        </motion.p>
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter">
          {progress}%
        </h1>
      </div>
    </motion.div>
  );
}