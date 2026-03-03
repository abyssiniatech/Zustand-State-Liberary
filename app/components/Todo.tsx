"use client";

import { useEffect, useState } from "react";
import { Todo } from "@/types";
import { fetchTodos } from "@/lib/api";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTodos()
      .then((data) => setTodos(data.slice(0, 10))) // only first 10 for demo
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Todos</h1>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-3 border rounded flex justify-between items-center ${
              todo.completed ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <span>{todo.title}</span>
            <span
              className={`text-xs px-2 py-1 rounded ${
                todo.completed ? "bg-green-500 text-white" : "bg-red-500 text-white"
              }`}
            >
              {todo.completed ? "Done" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}