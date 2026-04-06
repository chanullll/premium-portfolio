"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useCursorStore } from "@/store/useCursorStore";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const { setCursor, resetCursor } = useCursorStore();
  
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    // FIX: API eka call karanna kalin Form eka save kara gannawa!
    const form = e.currentTarget; 
    const formData = new FormData(form);
    
    const result = await sendEmail(formData);

    if (result?.error) {
      setError(result.error);
    } else {
      setIsSuccess(true);
      form.reset(); // Dan meka 100% perfectly weda!
      
      setTimeout(() => setIsSuccess(false), 5000);
    }
    
    setIsPending(false);
  };

  return (
    <footer
      ref={containerRef}
      className="relative w-full h-[120vh] md:h-[900px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)" }}
      id="contact"
    >
      <div className="fixed bottom-0 left-0 w-full h-[120vh] md:h-[900px] bg-[#050505] overflow-hidden flex flex-col justify-end">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[150px] -z-10 rounded-full pointer-events-none" />

        <motion.div
          style={{ y, scale, opacity }}
          className="w-full h-full max-w-7xl mx-auto px-4 flex flex-col justify-center relative z-10 pt-20"
        >
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            
            {/* Left Side: Text */}
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
                Let&apos;s build <br />
                <span className="text-purple-400">legendary.</span>
              </h2>
              <p className="text-white/50 text-lg md:text-xl max-w-md">
                Ready to take your digital presence to the next level? Drop me a message and let&apos;s discuss your project. I usually respond within 24 hours.
              </p>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
              
              {/* Success Screen Overlay */}
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-20 bg-[#050505]/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                </motion.div>
              ) : null}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-sm text-white/60 ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="senderEmail" className="text-sm text-white/60 ml-1">Email</label>
                  <input 
                    type="email" 
                    id="senderEmail" 
                    name="senderEmail" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-sm text-white/60 ml-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none"
                  />
                </div>

                {error && <p className="text-red-400 text-sm mt-1">{error}</p>}

                <button 
                  type="submit"
                  disabled={isPending}
                  onMouseEnter={() => setCursor("", "button")}
                  onMouseLeave={resetCursor}
                  className="mt-2 group flex items-center justify-center gap-2 w-full bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>

          {/* Bottom Footer Bar */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center mt-auto pb-8 pt-8 border-t border-white/10 text-white/40 text-sm">
            <p>© {new Date().getFullYear()} Chanul. All rights reserved.</p>

            <div className="flex items-center gap-6 mt-4 md:mt-0 text-white/60">
              <a href="#" onMouseEnter={() => setCursor("", "button")} onMouseLeave={resetCursor} className="hover:text-purple-400 transition-colors duration-300">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path><path d="M9 18c-4.5 1.6-5-2.5-7-3m14 6v-3.8c0-1.2-.5-2.4-1.4-3.2"></path></svg>
              </a>
              <a href="#" onMouseEnter={() => setCursor("", "button")} onMouseLeave={resetCursor} className="hover:text-purple-400 transition-colors duration-300">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
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