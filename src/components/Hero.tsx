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
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      
      <Background3D />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-20 pointer-events-none" />

      <div className="text-center z-10 px-4 pointer-events-none flex flex-col items-center">
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-6 drop-shadow-lg">
            Chanul Dilmith • Software Engineer
          </p>
        </motion.div>

        <motion.h1
          variants={headingContainer}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-4 drop-shadow-2xl flex flex-col items-center"
        >
          <div className="overflow-hidden">
            <motion.span variants={wordVariant} className="inline-block pb-2">
              Engineering
            </motion.span>
          </div>
          
          <div className="overflow-hidden flex gap-4 md:gap-8">
            <motion.span 
              variants={wordVariant} 
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200 pb-4"
            >
              Premium
            </motion.span>
            <motion.span variants={wordVariant} className="inline-block pb-4">
              Experiences.
            </motion.span>
          </div>
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ delay: 0.8 }}
        >
          <p className="max-w-xl mx-auto text-lg md:text-xl text-white/70 mt-6 drop-shadow-lg">
            I'm a Software Engineering undergrad specializing in Next.js and immersive 3D interactions. I don't just write code; I craft God-Tier digital realities.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 pointer-events-auto"
        >
                    {/* Palaweni Button eka: View Work */}
          <MagneticButton>
            <a 
              href="#work"
              onClick={(e) => {
                e.preventDefault(); // Nikan pannananne nathuwa
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); // Smooth wela yanawa
              }}
              onMouseEnter={() => setCursor("", "button")}
              onMouseLeave={resetCursor}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-purple-400 hover:text-white transition-colors duration-300"
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
              className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              Download CV
            </a>
          </MagneticButton>

        </motion.div>
      </div>
    </section>
  );
}