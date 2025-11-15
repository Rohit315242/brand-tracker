const Mention = require("../models/Mention");

module.exports = (io) => {

  io.on("connection", async (socket) => {
    console.log("Client connected:", socket.id);

    // Send latest 20 mentions on connection
    const recent = await Mention.find().sort({ createdAt: -1 }).limit(20);
    socket.emit("initial_mentions", recent);
  });

};
