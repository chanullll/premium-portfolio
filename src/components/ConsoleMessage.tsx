"use client";

import { useEffect } from "react";

export default function ConsoleMessage() {
  useEffect(() => {
    // Console eke print wena text eke CSS styling
    const titleStyle = "font-size: 24px; font-weight: bold; color: #c084fc; text-shadow: 2px 2px 0px #050505;";
    const textStyle = "font-size: 14px; color: #e5e7eb; background: #0a0a0a; padding: 12px; border-radius: 8px; border: 1px solid #c084fc; line-height: 1.6;";

    // %c dammama console.log ekata CSS apply karanna puluwan
    console.log("%c🚀 HOLD UP, FELLOW DEVELOPER!", titleStyle);
    console.log(
      "%cYou like looking under the hood, huh? I like that.\n\nI am Chanul Dilmith, and I'm actively seeking a Software Engineering Internship.\nIf you're looking for a developer who obsesses over the 1% details, let's talk.\n\nPress [Ctrl + K] on the site to open my Command Palette, or reach out via the contact form! 💜",
      textStyle
    );
  }, []);

  return null; // UI ekak na, invisible wada karanne
}