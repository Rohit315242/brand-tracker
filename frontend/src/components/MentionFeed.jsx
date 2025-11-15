import React from "react";

export default function MentionFeed({ mentions = [] }){
  return (
    <div className="mt-4">
      <h2 className="font-semibold mb-2">Recent Mentions</h2>
      <div>
        {mentions.map(m => (
          <div key={m._id || m.url} className="p-3 bg-white rounded shadow mb-2">
            <div className="flex justify-between">
              <div className="text-sm text-gray-600">{m.source}</div>
              <div className="text-sm">
                <span className={`px-2 py-0.5 rounded text-white ${m.sentiment === 'positive' ? 'bg-green-500' : m.sentiment === 'negative' ? 'bg-red-500' : 'bg-gray-400'}`}>
                  {m.sentiment}
                </span>
              </div>
            </div>
            <a href={m.url} target="_blank" rel="noreferrer" className="text-md font-medium hover:underline block">
              {m.title || m.text}
            </a>
            <p className="text-sm text-gray-500 mt-1">{new Date(m.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
