import prisma from "../../server/prisma";
import { Request, Response } from "express";
import { zod_createChat } from "../zod";

export const createChat = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const result = zod_createChat.safeParse(body);

    if (!result.success) {
      return res.status(400).json(result.error);
    }

    const { users, type, name, image } = result.data;

    const newChat = await prisma.chat.create({
      data: {
        type,
        name,
        image,
        // ...(image && { image }),
        Users: { connect: users.map((user) => ({ id: +user })) },
      },
    });

    if (!newChat) {
      throw new Error();
    }

    res.status(200).json(newChat);
  } catch (error) {
    res.status(500).send("Error en el server");
  }
};
