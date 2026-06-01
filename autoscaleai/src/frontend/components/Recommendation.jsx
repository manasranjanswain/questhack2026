export default function Recommendation({ rec }) {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-white mb-4">
        🤖 AI Recommendation
      </h2>

      <div className="grid grid-cols-4 gap-4 text-center text-white">
        <Stat label="CPU" value={`${rec.cpu} cores`} />
        <Stat label="RAM" value={`${rec.ram} GB`} />
        <Stat label="Storage" value={`${rec.storage} GB`} />
        <Stat label="Size" value={rec.tshirt_size} />
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-sm">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}