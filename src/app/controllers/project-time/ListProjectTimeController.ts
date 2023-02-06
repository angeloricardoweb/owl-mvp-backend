import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class ListProjectTimeController {
  async handle(request: Request, response: Response) {
    const projects = await prismaClient.projectTime.findMany({});

    return response.json({
      results: projects,
    });
  }
}
