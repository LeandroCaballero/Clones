import prisma from "../../server/prisma";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    // console.log("Entra en register", req.body)

    const oldUser = await prisma.user.findFirst({ where: { email } });

    if (oldUser) {
      return res
        .status(409)
        .json({ message: "El email ya se encuentra registrado" });
    }

    let encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: encryptedPassword,
      },
    });

    res.status(200).json({ newUser });
  } catch (error) {
    res.status(500).send("Error en el server");
  }

  // res.json({
  //   id: user.id,
  //   email: user.email,
  //   message: "Registro exitoso, inicie sesión",
  // })
};

export const login = async (req: Request, res: Response) => {
  console.log(req.body);
  const { email, password } = req.body;
  console.log(email, password);

  const existUser = await prisma.user.findFirst({ where: { email } });

  if (!existUser) {
    return res
      .status(409)
      .json({ message: "El email ingresado no se encuentra registrado" });
  }

  if (await bcrypt.compare(password, existUser.password)) {
    res.status(201).json(existUser);
  } else {
    res.status(403).json({ message: "Credenciales incorrectas" });
  }
};