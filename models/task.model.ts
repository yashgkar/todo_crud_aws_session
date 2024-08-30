import { DataTypes, Model, UUIDV4 } from "sequelize";

import db from "../database/driver";

class Task extends Model {}
Task.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "task" }
);

export default Task;
