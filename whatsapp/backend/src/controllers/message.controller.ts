import prisma from "../../server/prisma";
import { Request, Response } from "express";

export const saveMessage = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    // console.log("Entra en register", req.body)

    const oldUser = await prisma.message.create({
      data: {
        messageType: message.type,
      },
    });

    if (oldUser) {
      return res
        .status(409)
        .json({ message: "El email ya se encuentra registrado" });
    }

    res.status(200).json({});
  } catch (error) {
    res.status(500).send("Error en el server");
  }

  // res.json({
  //   id: user.id,
  //   email: user.email,
  //   message: "Registro exitoso, inicie sesión",
  // })
};
