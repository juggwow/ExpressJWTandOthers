import express from "express";
import prisma from "../db";
import { generateToken } from "../until/token";
import bcrypt from "bcrypt";

const userRouter = express.Router();

userRouter.post("/registor", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    console.log("try");
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        password: hashPassword,
      },
    });
    res.json({
      token: generateToken({ id: user.id }),
    });
  } catch (err) {
    console.error(err);
    next();
  }
});
userRouter.post("login", (req, res) => {});
userRouter.post("logout", (req, res) => {});

export default userRouter;
