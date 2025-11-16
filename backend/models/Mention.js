
const mongoose = require("mongoose");

const mentionSchema = new mongoose.Schema({
  source: { type: String },
  title: { type: String },
  text: { type: String },
  url: { type: String },
  sentiment: { type: String, enum: ["positive","negative","neutral"], default: "neutral" },
  topic: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Mention", mentionSchema);
