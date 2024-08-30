import "dotenv/config";
import express, { Express, Request, Response } from "express";
import chalk from "chalk";
import { config } from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

import db from "./database/driver";
import taskRoutes from "./routes/task.route";

const log = console.log;

config();

const app: Express = express();
const port: string | number = process.env.PORT || 4000;

// middlewares
app.use(morgan("tiny"));
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) =>
  res.status(200).json({
    success: true,
    message: "Hello World",
  })
);

app.use("/task", taskRoutes);

db.sync({
  alter: true,
  force: true,
})
  .then(() => {
    app.listen(port, () => {
      log(chalk.greenBright(`Server up!`));
    });
  })
  .catch((err) => log(chalk.redBright(err)));
