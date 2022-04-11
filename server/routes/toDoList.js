import express from "express";

import {
  createToDoList,
  updateListItemStatus,
} from "../controllers/toDoList.js";

const router = express.Router();

router.post("/create", createToDoList);
router.post("/update/:listId", updateListItemStatus);

export default router;
