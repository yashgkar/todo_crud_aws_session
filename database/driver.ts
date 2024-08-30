import { Sequelize } from "sequelize";
import Task from "../models/task.model";

const dbVariables = {
  username: process.env.DEV_DB_USERNAME as string,
  password: process.env.DEV_DB_PASSWORD as string,
  database: process.env.DEV_DB_NAME as string,
  host: process.env.DEV_DB_HOSTNAME as string,
  ssl: process.env.DEV_DB_SSL as string,
  port: 5432,
  dialect: "postgres",
};

const dialectOptions =
  process.env.NODE_ENV === "production"
    ? {
        ssl: {
          require: dbVariables.ssl,
          rejectUnauthorized: false,
        },
      }
    : {};

const db = new Sequelize(
  dbVariables.database,
  dbVariables.username,
  dbVariables.password,
  {
    dialect: "postgres",
    host: dbVariables.host,
    logging: false,
    port: dbVariables.port,
    dialectOptions,
  }
);

export default db;
