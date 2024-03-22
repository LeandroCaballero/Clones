import { z } from "zod";
import prisma from "../../server/prisma";
import { zod_createChat } from "../zod";
import { Chat } from "@prisma/client";
import { Server, Socket } from "socket.io";
import { Request, Response } from "express";

export const createChat = async (req: Request, res: Response) => {
  try {
    const result = zod_createChat.safeParse(req.body);

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

export const getOneChat = async (req: Request, res: Response) => {
  const { chatId } = req.params;
  try {
    const existChat = await prisma.chat.findFirst({
      where: { id: +chatId },
      include: {
        users: true,
        messages: true,
      },
    });

    if (!existChat) {
      throw new Error("No existe el chat");
    }

    res.status(200).json(existChat);
    // socket.join(existIdChat);
    // io.to(existIdChat).emit("joinedChat", existChat);
  } catch (error) {
    res.status(500).json({ message: "Error en el server" });
  }
};

export const getAllChat = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const allChats = await prisma.chat.findMany({
      where: {
        users: { some: { id: +userId } },
      },
      include: {
        users: true,
        _count: { select: { messages: { where: { read: true } } } },
      },
    });

    res.status(200).json(allChats);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el server" });
  }
};
