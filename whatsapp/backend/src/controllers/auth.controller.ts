import prisma from "../../server/prisma";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";

interface DecodedToken extends JwtPayload {
  user_id: string;
  email: string;
}

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

    const token = jwt.sign(
      { user_id: newUser.id, email },
      process.env.TOKEN_KEY || "",
      {
        expiresIn: "7d",
      }
    );

    res.cookie("wptoken", token, { maxAge: 900000, httpOnly: true });

    // res.status(200).json({ newUser });
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
  const { email, password } = req.body;
  console.log(email, password);

  const existUser = await prisma.user.findFirst({ where: { email } });

  if (!existUser) {
    return res
      .status(409)
      .json({ message: "El email ingresado no se encuentra registrado" });
  }

  if (await bcrypt.compare(password, existUser.password)) {
    const token = jwt.sign(
      { user_id: existUser.id, email },
      process.env.TOKEN_KEY || "",
      {
        expiresIn: "7d",
      }
    );

    res.cookie("wptoken", token, { maxAge: 9000000 });
    res.status(201).json(existUser);
  } else {
    res.status(403).json({ message: "Credenciales incorrectas" });
  }
};

export const getStatus = async (req: Request, res: Response) => {
  try {
    const wpCookie = req.cookies.wptoken;

    const decodedToken = jwt.verify(wpCookie, process.env.TOKEN_KEY || "");

    const { user_id, email } = decodedToken as DecodedToken;

    const existUser = await prisma.user.findFirst({
      where: { email, id: +user_id },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!existUser) {
      return res.status(409).json({ message: "Cuenta no encontrada" });
    }

    res.status(200).json(existUser);
  } catch (error) {
    res.status(500).send("Error en el server");
  }
};
