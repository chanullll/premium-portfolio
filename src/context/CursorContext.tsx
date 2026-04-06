"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Cursor eke thiyenna puluwan thathwayan (States)
type CursorContextType = {
  cursorVariant: "default" | "project";
  setCursorVariant: (val: "default" | "project") => void;
  cursorText: string;
  setCursorText: (val: string) => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorVariant, setCursorVariant] = useState<"default" | "project">("default");
  const [cursorText, setCursorText] = useState("");

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant, cursorText, setCursorText }}>
      {children}
    </CursorContext.Provider>
  );
};

// Meka thama api anith files walin kanda ganna hook eka
export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) throw new Error("useCursor must be used within CursorProvider");
  return context;
};