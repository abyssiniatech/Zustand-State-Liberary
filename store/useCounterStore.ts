import { create } from 'zustand';

// 1. Define the shape of our state and actions
interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// 2. Create the store
export const useCounterStore = create<CounterState>((set) => ({
  count: 0, // Initial value
  
  // Actions
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));