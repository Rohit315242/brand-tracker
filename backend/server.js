require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const mentionRoutes = require("./routes/mentionRoutes");

const app = express();

app.use(cors({
  origin: ["https://brand-tracker-psi.vercel.app","http://localhost:5173"],
  methods: ["GET","POST"],
}));

connectDB();

app.use("/api/mentions", mentionRoutes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "https://brand-tracker-psi.vercel.app" }
});

require("./sockets/mentionSocket")(io);

const startCronJobs = require("./jobs/cronJobs");
startCronJobs(io);

server.listen(5000, () => console.log("🔥 Backend Running"));
