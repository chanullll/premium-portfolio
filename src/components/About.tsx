"use client";
import { motion } from "framer-motion";
import { Code2, Globe, Sparkles, Zap } from "lucide-react";

export default function About() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 md:py-40">
      
      {/* Section Heading eka */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Behind the <span className="text-purple-400">Code.</span>
        </h2>
        <p className="text-white/50 text-lg max-w-2xl">
          A quick glimpse into my universe, what tools I use, and what drives me to create premium digital experiences.
        </p>
      </motion.div>

      {/* Bento Grid Layout eka */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Box 1: About Me (Loku Box eka) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-500 flex flex-col justify-between group"
        >
          <Sparkles className="text-purple-400 w-10 h-10 mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Who am I?</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              I am a passionate creative developer from Sri Lanka. I don't just write code; I build interactive digital realities. My focus is always on performance, animations, and providing a butter-smooth user experience.
            </p>
          </div>
        </motion.div>

        {/* Box 2: Location/Timezone */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-500 flex flex-col items-center justify-center text-center group"
        >
          <Globe className="text-white/20 w-16 h-16 mb-6 group-hover:text-purple-400 transition-colors duration-500 group-hover:animate-spin-slow" />
          <h3 className="text-xl font-semibold text-white mb-2">Based in</h3>
          <p className="text-purple-300 font-medium">Sri Lanka</p>
          <p className="text-white/40 text-sm mt-2">Available for worldwide freelance opportunities.</p>
        </motion.div>

        {/* Box 3: Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-500"
        >
          <Code2 className="text-purple-400 w-8 h-8 mb-6" />
          <h3 className="text-xl font-semibold text-white mb-6">Tech Arsenal</h3>
          <div className="flex flex-wrap gap-3">
            {/* Skills Pills */}
            {["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "GSAP"].map((skill, index) => (
              <span key={index} className="px-4 py-2 rounded-full border border-white/10 bg-black/50 text-white/70 text-sm hover:text-white hover:border-purple-400 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Box 4: Fast & Optimized */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2 bg-gradient-to-br from-purple-900/20 to-black border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-colors duration-500 flex items-center justify-between overflow-hidden relative"
        >
          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <Zap className="text-purple-400 w-10 h-10 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Built for Speed</h3>
            <p className="text-white/60">Every line of code is optimized for maximum performance and SEO.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}