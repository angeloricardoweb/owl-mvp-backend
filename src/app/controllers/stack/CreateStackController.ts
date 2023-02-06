import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class CreateStackController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const requiredData = ["name"];

    for (const data of requiredData) {
      if (!request.body[data]) {
        return response.status(400).json({
          error: `O campo ${data} é obrigatório`,
        });
      }
    }

    const stackAlreadyExists = await prismaClient.stack.findFirst({
      where: {
        name,
      },
    });

    if (stackAlreadyExists) {
      return response.status(400).json({
        message: "Stack já cadastrada",
      });
    }

    const stack = await prismaClient.stack.create({
      data: {
        name,
      },
    });

    return response.json({
      message: "Stack criada com sucesso",
      results: stack,
    });
  }
}
