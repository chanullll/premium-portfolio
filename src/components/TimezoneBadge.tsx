"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TimezoneBadge() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Sri Lanka we timezone ekata hadanawa (Asia/Colombo)
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(formatter.format(now));
    };

    updateClock(); // Component eka load weddi paarak run wenawa
    const interval = setInterval(updateClock, 1000); // Thathparen thathpareta update wenawa
    
    return () => clearInterval(interval);
  }, []);

  // Hydration error eka nathi karanna, time eka set wenakam load wenne na
  if (!time) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }} // Preloader eka iwara unama lassanata pallenawa
      className="fixed top-6 right-6 md:top-8 md:right-10 z-[999] flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-2xl shadow-purple-500/5 pointer-events-none"
    >
      {/* Blinking Green Dot (Active Status) */}
      <div className="relative flex items-center justify-center w-2 h-2">
        <span className="absolute w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></span>
        <span className="relative w-2 h-2 bg-green-500 rounded-full"></span>
      </div>
      
      {/* Timezone Text */}
      <span className="text-white/80 text-[10px] md:text-xs font-semibold tracking-widest uppercase">
        CMB, LK • {time}
      </span>
    </motion.div>
  );
}