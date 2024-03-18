import { z } from "zod";
import prisma from "../../server/prisma";
import { zod_createChat } from "../zod";
import { Chat } from "@prisma/client";
import { Server, Socket } from "socket.io";

export const createChat = async (
  data: z.infer<typeof zod_createChat>
): Promise<Chat> => {
  try {
    const result = zod_createChat.safeParse(data);

    if (!result.success) {
      throw new Error(result.error.toString());
    }

    const { users, type, name, image } = result.data;

    const newChat = await prisma.chat.create({
      data: {
        type,
        name,
        image,
        users: { connect: users.map((user) => ({ id: +user })) },
      },
    });

    if (!newChat) {
      throw new Error("Error en el server");
    }

    return newChat;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getOneChat = async (
  io: Server,
  socket: Socket,
  chatId: number
) => {
  try {
    const existChat = await prisma.chat.findFirst({
      where: { id: chatId },
      include: {
        users: true,
      },
    });

    if (!existChat) {
      throw new Error("No existe el chat");
    }

    const existIdChat = existChat.id.toString();

    socket.join(existIdChat);
    io.to(existIdChat).emit("joinedChat", existChat);
  } catch (error) {
    socket.emit("errorExistChat", error);
  }
};

export const getAllChat = async (
  io: Server,
  socket: Socket,
  userId: number
) => {
  try {
    const allChats = await prisma.chat.findMany({
      where: {
        users: { some: { id: userId } },
      },
    });

    socket.emit("allChats", allChats);
  } catch (error) {
    socket.emit("errorExistChat", error);
  }
};
