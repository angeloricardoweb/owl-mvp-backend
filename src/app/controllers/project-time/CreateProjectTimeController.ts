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

    const user = await prismaClient.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return response.status(400).json({
        message: "Usuário não encontrado",
      });
    }

    const project = await prismaClient.project.findFirst({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      return response.status(400).json({
        message: "Projeto não encontrado",
      });
    }

    const stack = await prismaClient.stack.findFirst({
      where: {
        id: stackId,
      },
    });

    if (!stack) {
      return response.status(400).json({
        message: "Stack não encontrada",
      });
    }

    const projectTime = await prismaClient.projectTime.create({
      data: {
        projectName: project.name,
        userName: user.name,
        stackName: stack.name,
        minutes,
      },
    });

    return response.json({
      message: "Tempo de Projeto enviado com sucesso",
      results: projectTime,
    });
  }
}
