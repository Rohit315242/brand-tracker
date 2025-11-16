import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function SentimentChart({ stats }) {
  if (!stats) return <p>Loading sentiment chart...</p>;

  const data = [
    { name: "Positive", value: stats.positive ?? 0 },
    { name: "Negative", value: stats.negative ?? 0 },
    { name: "Neutral", value: stats.neutral ?? 0 },
  ];

  const COLORS = ["#22c55e", "#ef4444", "#6b7280"];

  return (
    <div className="bg-white p-4 shadow rounded-lg mb-4" style={{ height: 350 }}>
      <h2 className="text-lg font-semibold mb-2">Sentiment Breakdown</h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            outerRadius={110}
            dataKey="value"
            label={({ name, value }) => `${name} (${value})`}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
