"use client";
import { motion, Variants } from "framer-motion";
import { Download } from "lucide-react"; 
import Background3D from "./Background3D";
import MagneticButton from "./MagneticButton"; 
import { useCursorStore } from "@/store/useCursorStore"; 

export default function Hero() {
  const { setCursor, resetCursor } = useCursorStore(); 

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } },
  };

  const headingContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariant: Variants = {
    hidden: { opacity: 0, y: 100, rotate: 5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0, 
      transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } 
    },
  };

  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-0">
      
      {/* 3D Background */}
      <Background3D />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-20 pointer-events-none" />

      {/* Main Content Container */}
      <div className="text-center z-10 px-4 pointer-events-none flex flex-col items-center relative -mt-10 sm:-mt-0">
        
        {/* Glowing Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mb-6 sm:mb-8 flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md pointer-events-auto cursor-pointer hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          onMouseEnter={() => setCursor("", "button")}
          onMouseLeave={resetCursor}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide">
            Available for Internships
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <p className="text-purple-400 font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6 drop-shadow-lg">
            Chanul Dilmith • Full Stack Engineer
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={headingContainer}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-2 sm:mb-4 drop-shadow-2xl flex flex-col items-center"
        >
          <div className="overflow-hidden">
            <motion.span variants={wordVariant} className="inline-block pb-1 sm:pb-2">
              Engineering
            </motion.span>
          </div>
          
          <div className="overflow-hidden flex gap-3 sm:gap-4 md:gap-8">
            <motion.span 
              variants={wordVariant} 
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200 pb-2 sm:pb-4"
            >
              Premium
            </motion.span>
            <motion.span variants={wordVariant} className="inline-block pb-2 sm:pb-4">
              Systems.
            </motion.span>
          </div>
        </motion.h1>

        {/* Description */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ delay: 0.8 }}
        >
          <p className="max-w-xl mx-auto text-sm sm:text-base md:text-xl text-white/70 mt-4 sm:mt-6 drop-shadow-lg leading-relaxed">
            I'm a Full Stack Engineering undergrad bridging the gap between robust backend architectures and immersive 3D frontend experiences.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 pointer-events-auto"
        >
          <MagneticButton>
            <a 
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={() => setCursor("", "button")}
              onMouseLeave={resetCursor}
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-black font-semibold hover:bg-purple-400 hover:text-white transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
            >
              View Work
            </a>
          </MagneticButton>

          <MagneticButton>
            <a 
              href="/chanul-resume.pdf" 
              download="Chanul_Dilmith_Resume.pdf"
              onMouseEnter={() => setCursor("", "button")}
              onMouseLeave={resetCursor}
              className="group flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              Download CV
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}