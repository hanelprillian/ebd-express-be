import { NextFunction, Request, Response } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  // TODO: Implement token validation later
  // if (!token) {
  //   return res.status(401).json({ message: 'Unauthorized' });
  // }
  next();
};