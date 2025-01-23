import { ResponseAdapter } from "@/core/adapters/response.adapter";
import { User, UserService } from "@/services/user.service";
import { Request, Response } from 'express';

export class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getAllUsers(req: Request, res: Response): Promise<Response<User[]>> {
    const users = await this.userService.getAll();
    return res.status(200).json(ResponseAdapter.success(users));
  }

  async updateUser(req: Request, res: Response): Promise<Response<User>> {
    const user = await this.userService.update(req.params.id, req.body);
    return res.status(200).json(ResponseAdapter.success(user));
  }
}
