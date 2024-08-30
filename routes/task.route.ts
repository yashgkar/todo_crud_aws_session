import { Router } from "express";

import taskController from "../controller/task.controller";

const router = Router();

router.post("/create", taskController.create);
router.get("/get", taskController.get);

export default router;
