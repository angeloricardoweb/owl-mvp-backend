import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class ListProjectController {
  async handle(request: Request, response: Response) {
    const projects = await prismaClient.project.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return response.json({
      results: projects,
    });
  }
}
