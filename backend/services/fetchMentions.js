
const Parser = require("rss-parser");
const parser = new Parser();
const Mention = require("../models/Mention");
const analyze = require("../utils/sentiment");

const BRAND_QUERY = process.env.BRAND_QUERY || "yourbrand OR #yourbrand OR brandname";

async function fetchGoogleNews(io) {   
  try {
    const url = `https://news.google.com/rss/search?q=${encodeURIComponent(BRAND_QUERY)}`;
    const feed = await parser.parseURL(url);

    let createdMentions = [];

    for (const item of feed.items.slice(0, 8)) {
      const exists = await Mention.findOne({ url: item.link });
      if (exists) continue;

      const sentiment = analyze(item.title + " " + (item.contentSnippet || ""));

      const newMention = await Mention.create({
        source: "Google News",
        title: item.title,
        text: item.contentSnippet || item.title,
        url: item.link,
        sentiment
      });

      createdMentions.push(newMention);

    
      io.emit("newMention", newMention);
      console.log("EMITTED new mention:", newMention.title);
    }

    return createdMentions;

  } catch (err) {
    console.error("Error fetching Google News:", err.message);
    return [];
  }
}

module.exports = { fetchGoogleNews };
