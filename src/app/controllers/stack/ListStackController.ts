import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class ListStackController {
  async handle(request: Request, response: Response) {
    const stacks = await prismaClient.stack.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return response.json({
      results: stacks,
    });
  }
}
