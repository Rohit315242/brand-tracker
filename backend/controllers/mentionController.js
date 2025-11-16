
const Mention = require("../models/Mention");

exports.getMentions = async (req, res) => {
  try {
    const { limit = 50, sentiment } = req.query;
    const query = {};
    if (sentiment) query.sentiment = sentiment;
    const mentions = await Mention.find(query).sort({ createdAt: -1 }).limit(parseInt(limit));
    res.json(mentions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStats = async (req, res) => {
  try {
    const total = await Mention.countDocuments();
    const positive = await Mention.countDocuments({ sentiment: "positive" });
    const negative = await Mention.countDocuments({ sentiment: "negative" });
    const neutral = await Mention.countDocuments({ sentiment: "neutral" });

    const now = new Date();
    const last24 = new Date(now - 24 * 60 * 60 * 1000);
    const prev24 = new Date(now - 48 * 60 * 60 * 1000);

    const lastCount = await Mention.countDocuments({ createdAt: { $gte: last24 } });
    const prevCount = await Mention.countDocuments({ createdAt: { $gte: prev24, $lt: last24 } });

    res.json({ total, positive, negative, neutral, lastCount, prevCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
