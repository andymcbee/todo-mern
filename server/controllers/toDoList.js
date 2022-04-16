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

export const updateList = async (req, res) => {
  const { listId } = req.params;
  const list = req.body;

  console.log(listId);

  if (!mongoose.Types.ObjectId.isValid(listId)) {
    return res.status(404).send("No post with that id");
  }

  try {
    const updatedList = await ToDoList.findByIdAndUpdate(listId, list, {
      new: true,
    });

    res.status(200).json(updatedList);
  } catch (error) {
    return res.status(400).send("Error updating");
  }
};

export const getLists = async (req, res) => {
  try {
    const lists = await ToDoList.find();
    res.status(200).json({ data: lists });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
