import { Router } from 'express';
import { UserController } from '@/controllers/user.controller';
import { authMiddleware } from '@/middleware/auth.middleware';

const userRoute = Router();
const userController = new UserController();

userRoute.get('/get-users', authMiddleware, userController.getAllUsers.bind(userController));

export default userRoute