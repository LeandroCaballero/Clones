import express from "express";
import { Server } from "socket.io";
import dotenv from "dotenv";
import { createServer } from "http";
import cors from "cors";
import router from "./index.routes";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {},
});

app.use(express.json());
app.use(cors());
app.use(router);

dotenv.config();

const port = process.env.PORT || "80";

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });

  socket.on("newMessage", (data: string) => {
    console.log("TEST", data);
    io.emit("recibir", data);
  });
});

app.get("/", (req, res) => {
  res.status(200).send("Holasssss");
});

server.listen(port, () => {
  console.log(`Running on port ${port}`);
});
