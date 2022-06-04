const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hi");
});

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", () => {
  console.log("New Connection is Ready");
});

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
