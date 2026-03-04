 "use client"
import { incrementstore } from "@/store/useincrement"
const Counterapp = () => {
    const {increment,decrement,reset} = incrementstore()
  return (
    <div className="bg-slate-800 min-h-screen flex text-slate-300 justify-center items-center">
       <section>
        <h1 className="text-3xl font-bold text-center">Counter App</h1>
        <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={increment} className="bg-teal-700 text-white rounded px-6 py-2 text-2xl hover:bg-teal-600">+increment</button>
            <button onClick={reset} className="bg-teal-700 text-white rounded px-6 py-2 text-2xl hover:bg-teal-600">reset</button>
            <button onClick={decrement} className="bg-teal-700 text-white rounded px-6 py-2 text-2xl hover:bg-teal-600">-decrement</button>
            </div>
       </section>
    </div>
  )
}

export default Counterapp
