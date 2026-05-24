import { useState } from "react";
import InputPanel from "./components/InputPanel";
import MetricsCards from "./components/MetricsCards";
import Recommendation from "./components/Recommendation";
import CostCard from "./components/CostCard";
import ChatBox from "./components/ChatBox";
import { analyzeServer } from "./services/api";

export default function App() {
  const [data, setData] = useState(null);

  const handleAnalyze = async (server) => {
    const res = await analyzeServer(server);
    setData(res);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-white">
        Autonomous Multi Agent Dashboard
      </h1>

      <InputPanel onAnalyze={handleAnalyze} />

      {data && (
        <>
          <MetricsCards metrics={data.metrics} />
          <Recommendation rec={data.recommendation} />
          <CostCard cost={data.cost} />
          <ChatBox />
        </>
      )}
    </div>
  );
}
