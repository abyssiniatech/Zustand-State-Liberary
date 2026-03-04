// Make sure the filename and path are correct. If your file is named 'CounterApp.tsx', update the import:
import CounterApp from "../components/CounterApp";
export default function Contact() {
  return (
    <div className="min-h-screen flex justify-center items-center  bg-indigo-900 text-white">
      <h1>Contact page!</h1>
      <CounterApp />
    </div>
  );
}
