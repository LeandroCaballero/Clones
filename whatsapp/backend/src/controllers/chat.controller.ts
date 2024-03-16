import { Response, Request } from "express";
import prisma from "../../server/prisma";

export const createChat = (req: Request, res: Response) => {
  try {
    const { chat } = req.body;

    const newChat = prisma.chat.create({
      data: {
        type: "Direct",
      },
    });
  } catch (error) {}
};
