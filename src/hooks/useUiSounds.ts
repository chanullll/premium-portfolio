"use client";
import { useCallback } from "react";

export function useUiSounds() {
  const playSound = useCallback((type: "hover" | "click") => {
    try {
      // Browser eke Audio Engine eka on karanawa
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      if (type === "hover") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(200, ctx.currentTime); // Hemin ena Low thump eka
        gainNode.gain.setValueAtTime(0.05, ctx.currentTime); // Volume eka harima adui
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === "click") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, ctx.currentTime); // Lassanata ena High pop eka
        gainNode.gain.setValueAtTime(0.1, ctx.currentTime); // Volume eka poddak wadiy
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.15);
      }
    } catch (e) {
      // Browser eken sound block kaloth error eka pennanne nathi wenna
    }
  }, []);

  return {
    playHover: () => playSound("hover"),
    playClick: () => playSound("click"),
  };
}