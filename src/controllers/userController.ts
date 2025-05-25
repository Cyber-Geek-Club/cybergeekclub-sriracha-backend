import type { Request, Response, NextFunction } from 'express';

export const Hello =(req: Request, res: Response,next: NextFunction): void => {
  res.status(200).json({
    message: "Hello, World!",
  });
}