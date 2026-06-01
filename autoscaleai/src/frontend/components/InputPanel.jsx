import { useState } from "react";

export default function InputPanel({ onAnalyze }) {
  const [server, setServer] = useState("app-prod-1");

  return (
    <div className="flex gap-4 items-center bg-gray-800 p-4 rounded-xl shadow">
      <input
        value={server}
        onChange={(e) => setServer(e.target.value)}
        className="flex-1 p-2 rounded bg-gray-700 text-white"
        placeholder="Enter server name"
      />
      <button
        onClick={() => onAnalyze(server)}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
      >
        Analyze
      </button>
    </div>
  );
}