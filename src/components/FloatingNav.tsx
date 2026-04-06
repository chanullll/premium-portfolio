"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Home, User, Briefcase, Mail } from "lucide-react";
import Link from "next/link";
import { useCursorStore } from "@/store/useCursorStore";

const navItems = [
  { name: "Home", icon: Home, link: "#home" },
  { name: "About", icon: User, link: "#about" },
  { name: "Work", icon: Briefcase, link: "#work" },
  { name: "Contact", icon: Mail, link: "#contact" },
];

export default function FloatingNav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { setCursor, resetCursor } = useCursorStore();

  // Scroll direction eka track karala Nav bar eka hide/show karanawa
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // Scrolling down -> Hide
    } else {
      setHidden(false); // Scrolling up -> Show
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 }, // 100px pallahata yanawa hide weddi
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[999]"
    >
      <div className="flex items-center gap-2 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl shadow-black/50">
        {navItems.map((item, index) => (
          <Link href={item.link} key={index}>
            <motion.div
              onMouseEnter={() => setCursor("", "button")} // Cursor eka maru karanawa
              onMouseLeave={resetCursor}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(192, 132, 252, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="relative p-4 rounded-full flex items-center justify-center text-white/70 hover:text-purple-400 transition-colors duration-200 group"
            >
              <item.icon className="w-5 h-5" />
              
              {/* Tooltip on Hover (Optional Premium Detail) */}
              <span className="absolute -top-10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-black border border-white/10 text-white text-xs px-3 py-1.5 rounded-md tracking-wider">
                {item.name}
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}