import { type NextFunction, type Request, type Response } from "express";
import { CustomError } from "../../../CustomError/CustomError.js";

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(error.message);

  const statusCode = error.statusCode || 500;
  const publicMessage = error.publicMessage || "Something went wrong";

  res.status(statusCode).json({ error: publicMessage });
};
