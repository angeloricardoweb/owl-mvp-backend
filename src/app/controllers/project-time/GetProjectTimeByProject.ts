import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class GetProjectTimeByProject {
  async handle(request: Request, response: Response) {
    const project = await prismaClient.project.findFirst({
      where: {
        id: request.params.id,
      },
    });

    if (!project) {
      return response.status(404).json({
        message: "Projeto não encontrado",
      });
    }

    const projects = await prismaClient.projectTime.findMany({
      where: {
        projectName: project.name,
      },
    });

    const totalTime = projects.reduce((acc, project) => {
      return acc + project.minutes;
    }, 0);

    return response.json({
      results: {
        project: project.name,
        totalTime,
      },
    });
  }
}
