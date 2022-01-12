import { Request, Response, NextFunction } from 'express';

export const exampleMiddleware = (req:Request, res:Response, next: NextFunction) => {
  /**
   * Write your code here
   */
  next();
}