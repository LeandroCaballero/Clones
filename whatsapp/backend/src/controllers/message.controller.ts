import prisma from "../../server/prisma";
import { Request, Response } from "express";
import { zod_createMessage } from "../zod/message";
import { Message } from "@prisma/client";

export const createMessage = async (data: Message) => {
  console.log("Data", data);
  try {
    const result = zod_createMessage.safeParse(data);

    if (!result.success) {
      throw new Error("Error al crear mensaje");
    }

    const { chatId, messageType, userId, audio, image, text, video } =
      result.data;

    const newMessage = await prisma.message.create({
      data: {
        messageType,
        audio,
        image,
        text,
        video,
        createBy: { connect: { id: userId } },
        chat: { connect: { id: chatId } },
      },
    });

    if (!newMessage) {
      throw new Error();
    }

    return newMessage;
  } catch (error) {
    throw new Error("Error en el server");
  }
};
