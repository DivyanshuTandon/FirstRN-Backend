import { Request, Response, NextFunction } from 'express';
import { loginService } from '../services/auth.service';

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const result = await loginService(email, password);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
