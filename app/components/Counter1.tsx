  "use client"
import { useCounterStore } from '@/store/useCounterStore';
const Counter1=()=>{
  const count = useCounterStore((state) => state.count);
  const { increment, decrement, reset } = useCounterStore();
    return(
        <section className="flex items-center justify-center flex-col border border-gray-100 rounded p-10">
          <div className="text-6xl font-bold">
            Counter app
          </div>
           <div className="text-6xl font-bold m-4">
            {count}
          </div>
          <div className="flex items-center gap-4">
             <button onClick={decrement} className="bg-slate-700 text-white px-6 py-2 rounded hover:bg-indigo-700"> - Decrement </button>
             <button onClick={reset} className="bg-slate-700 text-white px-6 py-2 rounded hover:bg-indigo-700"> Reset  </button>
             <button onClick={increment} className="bg-slate-700 text-white px-6 py-2 rounded hover:bg-indigo-700"> + Increment </button>
          </div>
        </section>
    )
}
export default Counter1