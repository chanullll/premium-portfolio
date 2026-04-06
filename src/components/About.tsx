"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Globe, Sparkles, Zap } from "lucide-react";

// Reusable 3D Tilt Card Component eka
function TiltCard({ children, containerClassName = "", cardClassName = "", delay = 0 }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      style={{ perspective: 1000 }} 
      className={containerClassName}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`w-full h-full rounded-3xl group ${cardClassName}`}
      >
        <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="w-full h-full">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-4 py-24 md:py-40">
      
      {/* Section Heading eka */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          More Than Just <span className="text-purple-400">Code.</span>
        </h2>
        <p className="text-white/50 text-lg max-w-2xl">
          My obsession lies in the sweet spot between clean backend architecture and pixel-perfect frontend design.
        </p>
      </motion.div>

      {/* Bento Grid Layout eka */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Box 1: About Me */}
        <TiltCard 
          delay={0.1}
          containerClassName="md:col-span-2"
          cardClassName="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-500 shadow-2xl shadow-black/50"
        >
          <div className="flex flex-col justify-between h-full">
            <Sparkles className="text-purple-400 w-10 h-10 mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Who am I?</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                As a Software Engineering undergraduate, I build applications that are not only blazingly fast but also visually unforgettable. Currently, I am actively seeking an internship opportunity to bring my God-Tier work ethic and creative problem-solving skills to a high-performing engineering team.
              </p>
            </div>
          </div>
        </TiltCard>

        {/* Box 2: Location/Timezone */}
        <TiltCard 
          delay={0.2}
          cardClassName="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-500 shadow-2xl shadow-black/50"
        >
          <div className="flex flex-col items-center justify-center text-center h-full">
            <Globe className="text-white/20 w-16 h-16 mb-6 group-hover:text-purple-400 transition-colors duration-500 group-hover:animate-spin-slow" />
            <h3 className="text-xl font-semibold text-white mb-2">Based in</h3>
            <p className="text-purple-300 font-medium">Sri Lanka</p>
            <p className="text-white/40 text-sm mt-2">Open to local & remote internship opportunities.</p>
          </div>
        </TiltCard>

        {/* Box 3: Tech Stack */}
        <TiltCard 
          delay={0.3}
          cardClassName="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-500 shadow-2xl shadow-black/50"
        >
          <div className="flex flex-col h-full">
            <Code2 className="text-purple-400 w-8 h-8 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-6">Tech Arsenal</h3>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "TypeScript", "Tailwind", "Three.js", "Framer Motion", "GSAP", "Zustand"].map((skill, index) => (
                <span key={index} className="px-4 py-2 rounded-full border border-white/10 bg-black/50 text-white/70 text-sm hover:text-white hover:border-purple-400 transition-colors cursor-default shadow-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>

        {/* Box 4: Fast & Optimized */}
        <TiltCard 
          delay={0.4}
          containerClassName="md:col-span-2"
          cardClassName="bg-gradient-to-br from-purple-900/20 to-black border border-white/10 p-8 hover:border-purple-500/50 transition-colors duration-500 overflow-hidden relative shadow-2xl shadow-black/50"
        >
          <div className="flex items-center justify-between h-full">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10 w-full flex flex-col justify-center">
              <Zap className="text-purple-400 w-10 h-10 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">Engineered for Scale</h3>
              <p className="text-white/60">Writing clean, scalable, and highly optimized code to solve real-world problems.</p>
            </div>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}