import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class CreateProjectTimeController {
  async handle(request: Request, response: Response) {
    const { projectId, userId, time } = request.body;

    const requiredData = ["projectId", "userId", "time"];

    for (const data of requiredData) {
      if (!request.body[data]) {
        return response.status(400).json({
          error: `O campo ${data} é obrigatório`,
        });
      }
    }

    const projectTime = await prismaClient.projectTime.create({
      data: {
        projectId,
        userId,
        time,
      },
    });

    return response.json({
      message: "Tempo de Projeto enviado com sucesso",
      results: projectTime,
    });
  }
}
