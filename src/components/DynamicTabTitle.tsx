"use client";

import { useEffect } from "react";

export default function DynamicTabTitle() {
  useEffect(() => {
    // Parana (Original) title eka save karagannawa
    let originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Wena tab ekakata giyama pennana nama
        document.title = "👀 Come back to Chanul!";
      } else {
        // Aayeth ape tab ekata awama parana nama danawa
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.title = originalTitle; // Component eka unmount weddi reset karanawa
    };
  }, []);

  return null; // Meke UI ekak na, background logic ekak witharai
}