import { NextFunction, Request, Response } from "express";
import ErrorResponse, { CustomError, NotFound } from "./utils/error-response";

export function notFound(req: Request, res: Response, next: NextFunction) {
  throw new NotFound(`🔍 - Not Found - ${req.originalUrl}`);
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
