const Sentiment = require("sentiment");
const sentiment = new Sentiment();

function analyze(text) {
  if (!text) return "neutral";
  const result = sentiment.analyze(text);
  if (result.score > 0) return "positive";
  if (result.score < 0) return "negative";
  return "neutral";
}

module.exports = analyze;
