export default function MetricsCards({ metrics }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card title="CPU Peak" value={`${metrics.cpu_peak}%`} />
      <Card title="Memory Peak" value={`${metrics.memory_peak}%`} />
      <Card title="Disk Growth" value={`${metrics.disk_growth}%`} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow text-center">
      <h3 className="text-gray-400">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}