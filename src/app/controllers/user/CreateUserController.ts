import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email } = request.body;

    const category = await prismaClient.user.create({
      data: {
        name,
        email,
      },
    });

    return response.json(category);
  }
}
