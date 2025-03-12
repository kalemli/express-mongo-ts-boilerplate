export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(msg: string) {
    super(msg);
  }
}

export class BadRequest extends CustomError {
  statusCode = 400;
  constructor(msg: string = "Bad request") {
    super(msg);
  }
}
export class NotFound extends CustomError {
  statusCode = 404;
  constructor(msg: string = "Not found") {
    super(msg);
  }
}

export default interface ErrorResponse {
  message: string;
  stack?: string;
}
