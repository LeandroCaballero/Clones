import express from "express";
import { Server } from "socket.io";
import dotenv from "dotenv";
import { createServer } from "http";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "./index.routes";
import { zod_createChat } from "./src/zod";
import { z } from "zod";
import * as ChatControl from "./src/controllers";
import morgan from "morgan";
import { createMessage } from "./src/controllers/message.controller";
import { Message } from "@prisma/client";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {},
});

const logger = morgan("tiny");

app.use(express.json());
app.use(logger);
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(router);

dotenv.config();

const port = process.env.PORT || "80";

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });

  socket.on("joinExistChat", (idChat: number) => {
    socket.join(String(idChat));
  });

  socket.on("newMessage", (data: Message) => {
    createMessage(data).then((res) =>
      io.to(String(data.chatId)).emit("newMessage", res)
    );
  });
});

server.listen(port, () => {
  console.log(`Running on port ${port}`);
});
