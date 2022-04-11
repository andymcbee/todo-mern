import ToDoList from "../models/toDoList.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const createToDoList = async (req, res) => {
  const { title, toDoItems } = req.body;
  console.log(req.body.toDoItems);

  const newToDoList = new ToDoList({
    title,
    toDoItems,
  });

  try {
    await newToDoList.save();
    res.status(201).json(newToDoList);
  } catch (error) {
    res.status(409).json({ message: "Error creating new item" });
  }
};

export const updateListItemStatus = async (req, res) => {
  const { completionStatus, _id } = req.body;
  //console.log(req.body);
  //console.log(req.params.listId);

  if (!mongoose.Types.ObjectId.isValid(req.params.listId)) {
    return res.status(409).json({ message: "No ID exists that matches" });
  }

  const existingToDoList = await ToDoList.findOne({ _id: req.params.listId });

  //console.log(existingToDoList);

  const updatedValue = existingToDoList.toDoItems.filter(
    (x) => x._id == req.body
  );

  console.log(updatedValue);

  try {
  } catch (error) {
    res.status(409).json({ message: "Error updating list item" });
  }
};
