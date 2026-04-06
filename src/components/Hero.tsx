"use client";
import { motion } from "framer-motion";

export default function Hero() {
  // Animation settings (Yatin udaata ena eka)
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* Pitipasse thiyena Purple Glow Effect eka */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />

      <div className="text-center z-10 px-4">
        {/* Podi text eka */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-6">
            Chanul • Creative Developer
          </p>
        </motion.div>

        {/* Loku Heading eka */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          // Podi delay ekak denawa, ethakota piliwelata udaata enne
          transition={{ delay: 0.2 }} 
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-4">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
              Digital
            </span> Reality.
          </h1>
        </motion.div>

        {/* Wisthara text eka */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ delay: 0.4 }}
        >
          <p className="max-w-xl mx-auto text-lg md:text-xl text-white/50 mt-6">
            I craft premium web experiences with modern technologies, focusing on smooth animations and pixel-perfect design.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-purple-400 hover:text-white transition-colors duration-300">
            View Work
          </button>
          <button className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-colors duration-300">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}