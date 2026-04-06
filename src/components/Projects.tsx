"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Oyaage projects wala details (Mewa passe oyaage aththa projects walata wenas karaganna puluwan)
const projectsData = [
  {
    id: 1,
    title: "E-Commerce OS",
    description: "A complete operating system for modern e-commerce brands. Built with Next.js, Stripe, and Tailwind.",
    tech: ["Next.js", "Tailwind", "Stripe"],
    color: "from-purple-500/20 to-black",
  },
  {
    id: 2,
    title: "AI Image Gen",
    description: "Generative AI platform where users can create stunning visual art using stable diffusion models.",
    tech: ["React", "Python", "OpenAI API"],
    color: "from-blue-500/20 to-black",
  },
  {
    id: 3,
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with beautiful charts and portfolio management.",
    tech: ["TypeScript", "Framer Motion", "Chart.js"],
    color: "from-emerald-500/20 to-black",
  },
];

export default function Projects() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 md:py-40 relative">
      
      {/* Section Heading eka */}
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

      {/* Projects Cards Container */}
      <div className="flex flex-col gap-10">
        {projectsData.map((project, index) => {
          // Cards eken eka udin hira wenna (sticky) top margin eka wadi karanawa
          const stickyTop = `calc(15vh + ${index * 40}px)`; 
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`sticky w-full h-[60vh] md:h-[70vh] rounded-3xl border border-white/10 bg-gradient-to-br ${project.color} p-8 md:p-12 flex flex-col justify-between overflow-hidden group shadow-2xl shadow-black/50`}
              style={{ top: stickyTop }}
            >
              
              {/* Card uda thiyena wisthara */}
              <div className="flex justify-between items-start z-10">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-lg md:text-xl max-w-xl">
                    {project.description}
                  </p>
                </div>
                
                {/* Arrow Icon Button eka */}
                <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-purple-400 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>

              {/* Card yata thiyena Tech Stack Tags */}
              <div className="flex gap-3 mt-8 z-10">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-5 py-2 rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-md text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Background eke thiyena loku Number Watermark eka */}
              <div className="absolute -bottom-10 -right-10 text-[250px] font-bold text-white/5 leading-none select-none z-0 group-hover:scale-110 transition-transform duration-700">
                0{project.id}
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}