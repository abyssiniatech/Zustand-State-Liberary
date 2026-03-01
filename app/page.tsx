import Counter from "./components/Counter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-indigo-900">
      <h1 className="text-3xl font-bold text-shadow-white mb-8">
        Zustand Counter
      </h1>
      <Counter />
    </main>
  );
}
