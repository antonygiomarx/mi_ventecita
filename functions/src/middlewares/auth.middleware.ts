import { NextFunction, Request, Response } from "express";
import { config } from "dotenv";

config();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .json({
        success: false,
        message: "Token is required",
      })
      .status(401);
  } else if (token !== process.env.AUTH_TOKEN) {
    return res
      .json({
        success: false,
        message: "Invalid token",
      })
      .status(401);
  } else {
    return next();
  }
};

export default authMiddleware;
