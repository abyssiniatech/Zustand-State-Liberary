"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5 fixed">
      <h1 className="text-xl font-bold mb-6">My Dashboard</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/" className="hover:bg-gray-700 block p-2 rounded">
            Home
          </Link>
        </li>
        <li>
          <Link href="/users" className="hover:bg-gray-700 block p-2 rounded">
            Users
          </Link>
        </li>
        <li>
          <Link href="/todos" className="hover:bg-gray-700 block p-2 rounded">
            Todos
          </Link>
        </li>
      </ul>
    </div>
  );
}