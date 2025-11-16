


const cron = require("node-cron");
const { fetchGoogleNews } = require("../services/fetchMentions");
const Mention = require("../models/Mention");

function startCronJobs(io) {

  // Run every 2 minutes
  cron.schedule("*/2 * * * *", async () => {
    console.log("CRON JOB RUNNING — Fetching news...");

    const newItems = await fetchGoogleNews(io); 

    if (newItems && newItems.length > 0) {
      newItems.forEach(item => {
        io.emit("newMention", item);  
      });

      console.log("EMITTED NEW MENTIONS:", newItems.length);
    }
  });

  // Clean old mentions every 6 hours
  cron.schedule("0 */6 * * *", async () => {
    const cutoff = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30);
    await Mention.deleteMany({ createdAt: { $lt: cutoff } });
    console.log("Old mentions cleaned");
  });

}

module.exports = startCronJobs;
