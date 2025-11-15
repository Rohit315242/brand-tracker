require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const mentionRoutes = require("./routes/mentionRoutes");

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));

connectDB();

app.use("/api/mentions", mentionRoutes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: process.env.FRONTEND_URL || "http://localhost:5173" }
});

require("./sockets/mentionSocket")(io);

const startCronJobs = require("./jobs/cronJobs");
startCronJobs(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
