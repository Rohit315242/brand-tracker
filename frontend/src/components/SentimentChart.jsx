import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#2ecc71","#e74c3c","#95a5a6"];

export default function SentimentChart({ stats = {} }){
  const data = [
    { name: "Positive", value: stats.positive || 0 },
    { name: "Negative", value: stats.negative || 0 },
    { name: "Neutral", value: stats.neutral || 0 }
  ];
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Sentiment Breakdown</h2>
      <div style={{ width: "100%", height: 240 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" innerRadius={50} outerRadius={80}>
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
