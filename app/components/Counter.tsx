'use client'; // Required for Zustand hooks

import { useCounterStore } from '@/store/useCounterStore';

export default function Counter() {
  // Select only the pieces of state you need for better performance
  const count = useCounterStore((state) => state.count);
  const { increment, decrement, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center gap-6 p-10 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
      <h2 className="text-6xl font-black text-white">{count}</h2>
      
      <div className="flex gap-4">
        <button 
          onClick={decrement}
          className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
        >
          - Decrease
        </button>
        
        <button 
          onClick={reset}
          className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-all"
        >
          Reset
        </button>

        <button 
          onClick={increment}
          className="px-6 py-2 bg-green-500 hover:bg-green-600 text-slate-400 rounded-lg transition-all"
        >
          + Increase
        </button>
      </div>
    </div>
  );
}