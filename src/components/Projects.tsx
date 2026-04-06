"use client";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useCursorStore } from "@/store/useCursorStore"; // <- Import Zustand Store

const projectsData = [
  {
    id: 1,
    title: "E-Commerce OS",
    description: "A complete operating system for modern e-commerce brands. Built with Next.js, Stripe, and Tailwind.",
    tech: ["Next.js", "Tailwind", "Stripe"],
    color: "from-purple-500/20 to-black",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&auto=format&fit=crop", 
  },
  {
    id: 2,
    title: "AI Image Gen",
    description: "Generative AI platform where users can create stunning visual art using stable diffusion models.",
    tech: ["React", "Python", "OpenAI API"],
    color: "from-blue-500/20 to-black",
    image: "https://images.unsplash.com/photo-1675557009405-c496bc155bb3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with beautiful charts and portfolio management.",
    tech: ["TypeScript", "Framer Motion", "Chart.js"],
    color: "from-emerald-500/20 to-black",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { setCursor, resetCursor } = useCursorStore(); // <- Access functions from Zustand

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 160);
      mouseY.set(e.clientY - 120);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 md:py-40 relative">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Featured <span className="text-purple-400">Works.</span>
        </h2>
        <p className="text-white/50 text-lg max-w-2xl">
          Selected projects that showcase my passion for front-end development, animations, and user experience.
        </p>
      </motion.div>

      {/* Floating Image Reveal Element */}
      <motion.div
        className="fixed top-0 left-0 w-80 h-60 rounded-2xl overflow-hidden pointer-events-none z-50 shadow-2xl shadow-purple-500/20"
        style={{
          x: springX,
          y: springY,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: hoveredProject !== null ? 1 : 0, 
          scale: hoveredProject !== null ? 1 : 0.8,
          rotate: hoveredProject !== null ? (Math.random() > 0.5 ? 2 : -2) : 0 
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {hoveredProject !== null && (
          <Image 
            src={projectsData[hoveredProject].image} 
            alt="Project Preview" 
            fill
            className="object-cover"
          />
        )}
      </motion.div>

      <div className="flex flex-col gap-10">
        {projectsData.map((project, index) => {
          const stickyTop = `calc(15vh + ${index * 40}px)`; 
          
          return (
            <motion.div
              key={project.id}
              // Here is where the Magic Happens - Trigger both!
              onMouseEnter={() => {
                setHoveredProject(index);
                setCursor("VIEW", "project");
              }}
              onMouseLeave={() => {
                setHoveredProject(null);
                resetCursor();
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`sticky w-full h-[60vh] md:h-[70vh] rounded-3xl border border-white/10 bg-gradient-to-br ${project.color} p-8 md:p-12 flex flex-col justify-between overflow-hidden group shadow-2xl shadow-black/50 cursor-pointer`}
              style={{ top: stickyTop }}
            >
              
              <div className="flex justify-between items-start z-10">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-lg md:text-xl max-w-xl">
                    {project.description}
                  </p>
                </div>
                
                {/* Micro-interaction: Change cursor to ring variant when hovering specific button inside card */}
                <button 
                  onMouseEnter={(e) => {
                    e.stopPropagation(); // Stop card mouse event from firing
                    setCursor("", "button");
                  }}
                  onMouseLeave={(e) => {
                    e.stopPropagation();
                    setCursor("VIEW", "project"); // Switch back to 'VIEW' when leaving button but still in card
                  }}
                  className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-purple-400 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>

              <div className="flex gap-3 mt-8 z-10 relative">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-5 py-2 rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-md text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute -bottom-10 -right-10 text-[250px] font-bold text-white/5 leading-none select-none z-0 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                0{project.id}
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}