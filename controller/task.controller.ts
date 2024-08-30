import { Request, Response } from "express";
import Task from "../models/task.model";

export default {
  create: async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;
      const checkData = await Task.create({
        title,
        description,
      });
      checkData.save();
      res.status(200).json({
        success: true,
        data: checkData.toJSON(),
      });
    } catch (err) {
      res.status(404).json({
        success: false,
        message: err,
      });
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const data = await Task.findAll();
      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (err) {
      res.status(404).json({
        success: false,
        message: err,
      });
    }
  },
};
