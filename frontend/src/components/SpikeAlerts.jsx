import React from "react";

export default function SpikeAlerts({ stats = {} }){
  const { lastCount = 0, prevCount = 0 } = stats;
  const spike = prevCount ? Math.round(((lastCount - prevCount) / prevCount) * 100) : 0;
  const isSpike = spike > 40;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Alerts</h2>
      <div className="mb-3">
        <div className="text-sm text-gray-600">Mentions (last 24h)</div>
        <div className="text-2xl font-bold">{lastCount || 0}</div>
      </div>
      <div>
        <div className={`p-3 rounded ${isSpike ? 'bg-red-100 text-red-700' : 'bg-green-50 text-green-700'}`}>
          {isSpike ? `Spike detected: ${spike}% ↑` : `No major spike (${spike}%)`}
        </div>
      </div>
    </div>
  );
}
