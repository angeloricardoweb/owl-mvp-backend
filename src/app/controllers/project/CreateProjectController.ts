import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class CreateProjectController {
  async handle(request: Request, response: Response) {
    const { name, type } = request.body;

    const requiredData = [
      "name",
      "type",
    ];

    for (const data of requiredData) {
      if (!request.body[data]) {
        return response.status(400).json({
          error: `O campo ${data} é obrigatório`,
        });
      }
    }

    const projectAlreadyExists = await prismaClient.project.findFirst({
      where: {
        name,
      },
    });

    if (projectAlreadyExists) {
      return response.status(400).json({
        message: "Projeto já cadastrado",
      });
    }

    const project = await prismaClient.project.create({
      data: {
        name,
        type
      },
    });

    return response.status(201).json({
      message: "Projeto criado com sucesso",
      results: project,
    });
  }
}
