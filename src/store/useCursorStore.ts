import { create } from 'zustand';

type CursorVariant = 'default' | 'project' | 'button';

interface CursorState {
  text: string;
  variant: CursorVariant;
  active: boolean;
  setCursor: (text: string, variant: CursorVariant) => void;
  resetCursor: () => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  text: '',
  variant: 'default',
  active: false,
  setCursor: (text, variant) => set({ text, variant, active: true }),
  resetCursor: () => set({ text: '', variant: 'default', active: false }),
}));