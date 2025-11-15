import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import MentionFeed from "../components/MentionFeed";
import SentimentChart from "../components/SentimentChart";
import SpikeAlerts from "../components/SpikeAlerts";
import Navbar from "../components/Navbar";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const socket = io(API_BASE, {
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 1000
});

export default function Dashboard() {
  const [mentions, setMentions] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get(`${API_BASE}/api/mentions?limit=20`)
      .then(r => setMentions(r.data))
      .catch(() => {});

    axios.get(`${API_BASE}/api/mentions/stats`)
      .then(r => setStats(r.data))
      .catch(() => {});

    socket.on("initial_mentions", (data) => {
      setMentions(data);
    });

    socket.on("newMention", (newMention) => {
      setMentions(prev => [newMention, ...prev]);

      axios.get(`${API_BASE}/api/mentions/stats`)
        .then(r => setStats(r.data))
        .catch(() => {});
    });

    return () => {
      socket.off("initial_mentions");
      socket.off("newMention");
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Brand Mention Tracker</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <SentimentChart stats={stats} />
            <MentionFeed mentions={mentions} />
          </div>

          <div>
            <SpikeAlerts stats={stats} />
          </div>
        </div>
      </div>
    </div>
  );
}
