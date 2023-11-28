import { type NextFunction, type Request, type Response } from "express";
import { Part } from "../../../database/models/Parts.js";
import { CustomError } from "../../../CustomError/CustomError.js";

export const getParts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const parts = await Part.find().exec();

    res.status(200).json({ parts });
  } catch (error) {
    const customError = new CustomError(
      "Bad request",
      400,
      "Couldn't retrieve parts list",
    );

    next(customError);
  }
};
