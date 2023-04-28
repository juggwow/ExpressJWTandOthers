import prisma from "./db";
import express, { NextFunction, Request, Response } from "express";
import userRouter from "./handler/user";

const app = express();

// function middleware1(req: Request, res: Response, next: NextFunction) {
//   console.log("your params: ", req.params);
//   next(new Error("crash??"));
// }

// function middleware2(req: Request, res: Response, next: NextFunction) {
//   console.log("your method: ", req.method);
//   next();
// }

// app.get("/hello/:name", (req, res) => {
//   res.json({
//     name: req.params.name,
//     key: req.query.key,
//     foo: req.query.foo,
//   });
// });

// app.get("/users", async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.json({ users });
// });

app.use(express.json());

app.use("/api/v1", userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("error na ja");
  res.end();
});

export default app;
