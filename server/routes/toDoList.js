import express from "express";

import {
  createToDoList,
  updateListItemStatus,
} from "../controllers/toDoList.js";

const router = express.Router();

router.post("/create", createToDoList);
router.patch("/update/:listId/:listItemId", updateListItemStatus);

export default router;
