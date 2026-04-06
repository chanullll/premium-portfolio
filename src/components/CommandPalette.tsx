"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Search, Home, Briefcase, Mail, FileText, User, Command } from "lucide-react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  // Ctrl+K / Cmd+K eken open/close wena logic eka
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleAction = (actionFn: () => void) => {
    actionFn();
    setOpen(false); // Action eka kalata passe auto close wenawa
    setSearch("");
  };

  const actions = [
    { id: "home", name: "Go to Home", icon: Home, action: () => router.push("/") },
    { id: "about", name: "About Me", icon: User, action: () => router.push("/#about") },
    { id: "work", name: "View Projects", icon: Briefcase, action: () => router.push("/#work") },
    { id: "contact", name: "Send Email", icon: Mail, action: () => router.push("/#contact") },
    // Meke PDF nama oyage real resume eke namata maru karanna (e.g., chanul-resume.pdf)
    { id: "cv", name: "Download Resume", icon: FileText, action: () => window.open("/chanul-resume.pdf", "_blank") },
  ];

  // Search karana widihata filter wena eka
  const filteredActions = search === "" 
    ? actions 
    : actions.filter((a) => a.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[10000] w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/10 overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center px-4 border-b border-white/10">
              <Search className="w-5 h-5 text-white/50" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-white p-4 placeholder:text-white/30"
              />
              <div className="flex items-center gap-1 text-xs text-white/30 bg-white/5 px-2 py-1 rounded">
                <Command className="w-3 h-3" /> <span>K</span>
              </div>
            </div>

            {/* Actions List */}
            <div className="max-h-[300px] overflow-y-auto p-2">
              {filteredActions.length === 0 ? (
                <div className="p-4 text-center text-white/50 text-sm">
                  No results found.
                </div>
              ) : (
                filteredActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => handleAction(action.action)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-white/70 hover:text-white hover:bg-white/10 transition-colors group"
                  >
                    <action.icon className="w-5 h-5 text-white/40 group-hover:text-purple-400 transition-colors" />
                    <span>{action.name}</span>
                  </button>
                ))
              )}
            </div>
            
            {/* Footer Footer */}
            <div className="px-4 py-3 border-t border-white/10 bg-white/[0.02] flex justify-between items-center text-xs text-white/40">
              <span>Use <kbd className="bg-white/10 px-1 py-0.5 rounded">↑</kbd> <kbd className="bg-white/10 px-1 py-0.5 rounded">↓</kbd> to navigate</span>
              <span>Press <kbd className="bg-white/10 px-1 py-0.5 rounded">Esc</kbd> to close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}