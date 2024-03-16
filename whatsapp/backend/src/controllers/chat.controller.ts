import { z } from "zod";
import prisma from "../../server/prisma";
import { zod_createChat } from "../zod";
import { Chat } from "@prisma/client";

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
        Users: { connect: users.map((user) => ({ id: +user })) },
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

export const getOneChat = async (chatId: number): Promise<Chat> => {
  try {
    const existChat = await prisma.chat.findFirst({
      where: { id: chatId },
      include: {
        Users: true,
      },
    });

    if (!existChat) {
      throw new Error("No existe el chat");
    }

    return existChat;
  } catch (error) {
    throw new Error(error as string);
  }
};
