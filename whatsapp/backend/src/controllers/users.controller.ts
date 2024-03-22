import prisma from "../../server/prisma";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany();

    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).send("Error en el server");
  }
};
