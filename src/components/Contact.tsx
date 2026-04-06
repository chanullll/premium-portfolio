"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useCursorStore } from "@/store/useCursorStore"; // Zustand cursor magic

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const { setCursor, resetCursor } = useCursorStore();

  // Scroll position eka track karanawa curtain reveal eke parallax ekata
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Footer eka reveal weddi yata idan udata podi smooth push ekakui, scale ekakui wenawa
  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <footer
      ref={containerRef}
      // Meke height eka 100vh karanawa mobile walata, desktop walata 800px.
      // Clip-path eken thama magic eka wenne (Window ekak wage weda karanawa)
      className="relative w-full h-[100vh] md:h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      {/* Me yata thiyena div eka screen eke yatama fixed wela thiyenne. Eka penne udin thiyena content tika udata scroll wunama witarai */}
      <div className="fixed bottom-0 left-0 w-full h-[100vh] md:h-[800px] bg-[#050505] overflow-hidden flex flex-col justify-end">
        
        {/* Top Border eka */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

        {/* Background Glow eka */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[150px] -z-10 rounded-full" />

        {/* Parallax wena Inner Content eka */}
        <motion.div
          style={{ y, scale, opacity }}
          className="w-full h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center relative z-10 pt-20"
        >
          {/* Header & Text */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-6">
              Let&apos;s build something <br />
              <span className="text-purple-400">legendary.</span>
            </h2>
            <p className="text-white/50 text-xl max-w-xl mx-auto">
              Ready to take your digital presence to the next level? Drop me a message and let&apos;s discuss your project.
            </p>
          </div>

          {/* Say Hello Button */}
          <motion.a
            href="mailto:hello@chanul.com"
            onMouseEnter={() => setCursor("", "button")} // Cursor eka maru karanawa
            onMouseLeave={resetCursor}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 bg-white text-black px-8 py-5 rounded-full text-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(192,132,252,0.3)] hover:shadow-[0_0_60px_rgba(192,132,252,0.6)]"
          >
            <Mail className="w-6 h-6" />
            Say Hello
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>

          {/* Bottom Footer Bar */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center mt-auto pb-8 pt-8 border-t border-white/10 text-white/40 text-sm">
            <p>© {new Date().getFullYear()} Chanul. All rights reserved.</p>

            <div className="flex items-center gap-6 mt-4 md:mt-0 text-white/60">
              {/* GitHub */}
              <a href="#" onMouseEnter={() => setCursor("", "button")} onMouseLeave={resetCursor} className="hover:text-purple-400 transition-colors duration-300">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path><path d="M9 18c-4.5 1.6-5-2.5-7-3m14 6v-3.8c0-1.2-.5-2.4-1.4-3.2"></path></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" onMouseEnter={() => setCursor("", "button")} onMouseLeave={resetCursor} className="hover:text-purple-400 transition-colors duration-300">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* Twitter/X */}
              <a href="#" onMouseEnter={() => setCursor("", "button")} onMouseLeave={resetCursor} className="hover:text-purple-400 transition-colors duration-300">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>

            <p className="mt-4 md:mt-0">Designed & Built with 💜</p>
          </div>

        </motion.div>
      </div>
    </footer>
  );
}