import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

type JwtPayload = {
  userId: string;
  email: string;
};

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      code: 'TOKEN_MISSING',
      message: 'Authorization token is required',
    });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      code: 'TOKEN_INVALID',
      message: 'Invalid authorization format',
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    // attach user to request
    (req as any).user = decoded;

    next();
  } catch {
    return res.status(401).json({
      code: 'TOKEN_EXPIRED',
      message: 'Token is invalid or expired',
    });
  }
};
