import express from "express";
import { Server } from "socket.io";
import dotenv from "dotenv";
import { createServer } from "http";
import cors from "cors";
import router from "./index.routes";
import { zod_createChat } from "./src/zod";
import { z } from "zod";
import * as ChatControl from "./src/controllers";
import { Chat } from "@prisma/client";

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

  socket.on("newChat", async (data: z.infer<typeof zod_createChat>) => {
    try {
      const newChat = await ChatControl.createChat(data);

      if (newChat) {
        const idChat = newChat.id.toString();

        socket.join(idChat);
        io.to(idChat).emit("chatCreated", idChat);
      }
    } catch (error) {
      socket.emit("errorCreateChat", error);
    }
  });

  socket.on("joinExistChat", async (idChat: number) => {
    try {
      const existChat = await ChatControl.getOneChat(idChat);

      if (!existChat) {
        throw new Error("No existe el chat");
      }

      const existIdChat = existChat.id.toString();

      socket.join(existIdChat);
      io.to(existIdChat).emit("joinedChat", existChat);
    } catch (error) {
      socket.emit("errorExistChat", error);
    }
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
