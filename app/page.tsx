import Counter from "./components/Counter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900">
      <h1 className="text-3xl font-bold text-slate-400 mb-8">
        Zustand Counter App
      </h1>
      <Counter />
    </main>
  );
}
