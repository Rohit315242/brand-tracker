const mongoose = require("mongoose");
const Mention = require("../models/Mention");
require("dotenv").config();
const connectDB = require("../config/db");

async function seed() {
  await connectDB();
  const arr = [];
  for (let i = 0; i < 40; i++) {
    arr.push({
      source: "DemoSpike",
      title: `Spike mention ${Date.now()}-${i}`,
      text: `This is a demo spike mention ${i}`,
      sentiment: i % 3 === 0 ? "negative" : "neutral"
    });
  }
  await Mention.insertMany(arr);
  console.log("Inserted spike mentions");
  process.exit(0);
}

seed();
