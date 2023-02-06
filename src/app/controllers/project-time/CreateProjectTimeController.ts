import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class CreateProjectTimeController {
  async handle(request: Request, response: Response) {
    const { projectId, userId, minutes, stackId } = request.body;

    const requiredData = ["projectId", "userId", "minutes", "stackId"];

    for (const data of requiredData) {
      if (!request.body[data]) {
        return response.status(400).json({
          error: `O campo ${data} é obrigatório`,
        });
      }
    }

    const checkUserId = await prismaClient.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!checkUserId) {
      return response.status(400).json({
        message: "Usuário não encontrado",
      });
    }

    const checkProjectId = await prismaClient.project.findFirst({
      where: {
        id: projectId,
      },
    });

    if (!checkProjectId) {
      return response.status(400).json({
        message: "Projeto não encontrado",
      });
    }

    const checkStackId = await prismaClient.stack.findFirst({
      where: {
        id: stackId,
      },
    });

    if (!checkStackId) {
      return response.status(400).json({
        message: "Stack não encontrada",
      });
    }

    const projectTime = await prismaClient.projectTime.create({
      data: {
        projectId,
        userId,
        minutes,
        stackId,
      },
    });

    return response.json({
      message: "Tempo de Projeto enviado com sucesso",
      results: projectTime,
    });
  }
}
