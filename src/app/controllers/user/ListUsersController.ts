import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class ListUsersController {
  async handle(request: Request, response: Response) {
    const users = await prismaClient.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    return response.json(users);
  }
}
