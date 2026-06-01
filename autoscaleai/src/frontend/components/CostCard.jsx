export default function CostCard({ cost }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow text-white">
      <h2 className="text-lg mb-4">💰 Cost Estimate</h2>
      <p>Monthly: ₹{cost.monthly}</p>
      <p>Yearly: ₹{cost.yearly}</p>
    </div>
  );
}