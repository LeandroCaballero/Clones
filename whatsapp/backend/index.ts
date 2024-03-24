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

  // socket.on("newChat", async (data: z.infer<typeof zod_createChat>) => {
  //   try {
  //     const newChat = await ChatControl.createChat(data);

  //     if (newChat) {
  //       const idChat = newChat.id.toString();

  //       socket.join(idChat);
  //       io.to(idChat).emit("chatCreated", idChat);
  //     }
  //   } catch (error) {
  //     socket.emit("errorCreateChat", error);
  //   }
  // });

  socket.on("joinExistChat", (idChat: string) => {
    console.log("ID del chat", idChat);
    socket.join(idChat);
    io.to(idChat).emit("jeje", idChat);
    // ChatControl.getOneChat(io, socket, idChat);
  });

  // socket.on("getAllChats", (idChat: number) => {
  //   ChatControl.getAllChat(io, socket, idChat);
  // });

  socket.on("newMessage", (data: string) => {
    io.emit("recibir", data);
  });
});

server.listen(port, () => {
  console.log(`Running on port ${port}`);
});
