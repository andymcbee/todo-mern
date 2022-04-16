import express from "express";

import {
  createToDoList,
  updateList,
  getLists,
} from "../controllers/toDoList.js";

const router = express.Router();

router.post("/create", createToDoList);
router.patch("/update/:listId/", updateList);
router.get("/all", getLists);

export default router;
