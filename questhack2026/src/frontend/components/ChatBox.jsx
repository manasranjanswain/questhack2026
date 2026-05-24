import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (msg) => {
    setMessages([...messages, { user: msg }, { bot: "Analyzing..." }]);
  };

  return (
    <div className="bg-gray-900 p-4 rounded-xl">
      <h3 className="text-white mb-2">💬 Ask AI</h3>

      <div className="h-40 overflow-y-auto mb-2">
        {messages.map((m, i) => (
          <div key={i} className="text-sm text-gray-300">
            {m.user || m.bot}
          </div>
        ))}
      </div>

      <input
        onKeyDown={(e) => e.key === "Enter" && sendMessage(e.target.value)}
        className="w-full p-2 rounded bg-gray-700 text-white"
        placeholder="Ask about this server..."
      />
    </div>
  );
}