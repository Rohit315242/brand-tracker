import React from "react";

export default function Navbar(){
  return (
    <div className="bg-white shadow p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-pink-500 rounded flex items-center justify-center text-white font-bold">BT</div>
          <div className="font-semibold">Brand Tracker</div>
        </div>
        <div className="text-sm text-gray-600">Real-time · Sentiment · Alerts</div>
      </div>
    </div>
  );
}
