import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = <{ user_id: string }>request.params;
      const user = this.turnUserAdminUseCase.execute({ user_id });
      return response.json(user);
    } catch (error) {
      return response.status(404).json({ error: "User does not exists" });
    }
  }
}

export { TurnUserAdminController };
