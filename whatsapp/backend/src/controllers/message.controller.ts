import prisma from "../../server/prisma";
import { Request, Response } from "express";
import { zod_createMessage } from "../zod/message";

export const createMessage = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const result = zod_createMessage.safeParse(body);

    if (!result.success) {
      return res.status(400).json(result.error);
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
        createBy: { connect: { id: +userId } },
        chat: { connect: { id: +chatId } },
      },
    });

    if (!newMessage) {
      throw new Error();
    }

    res.status(200).json({});
  } catch (error) {
    res.status(500).send("Error en el server");
  }
};
