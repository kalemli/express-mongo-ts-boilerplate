import { NextFunction, Request, Response } from "express";
import ErrorResponse, { CustomError } from "./utils/error-response";

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(
  err: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ message: err.message });
    return;
  }

  res.status(400).send({
    message: "Something went wrong",
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
}
