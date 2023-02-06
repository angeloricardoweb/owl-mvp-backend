import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, role, password, password_confirmation } = request.body;

    const requiredData = [
      "name",
      "email",
      "role",
      "password",
      "password_confirmation",
    ];

    for (const data of requiredData) {
      if (!request.body[data]) {
        return response.status(400).json({
          error: `O campo ${data} é obrigatório`,
        });
      }
    }

    if (password !== password_confirmation) {
      return response.status(400).json({
        error: "Senhas não conferem",
      });
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      return response.status(400).json({
        message: "Usuário já cadastrado",
      });
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
        role,
      },
    });

    return response.json({
      message: "Usuário criado com sucesso",
      results: user,
    });
  }
}
