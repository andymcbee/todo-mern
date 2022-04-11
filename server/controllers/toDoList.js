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
  //const { completionStatus, _id } = req.body;
  console.log(req.params);
  const { listId, listItemId } = req.params;

  console.log(req.body.toDoItems[0].text);

  //const list = await ToDoList.findById(listId);

  const listQuery = {
    _id: listId,
  };

  const itemID = listItemId;

  const newValue = ToDoList.findOne(listQuery)
    .then((item) => {
      const audioIndex = item.toDoItems
        .map((item) => item.id)
        .indexOf(listItemId);
      item.toDoItems[audioIndex] = req.body.toDoItems[0];
      item.save();
    })
    .finally(() => {
      res.status(201).json({ message: "Updated!" });
    });
};
//this is working...

//I'm sending the data as an array, but I don't need to... send it as an object instead.

//also, for learning purposes, try to turn this into an await/async setup
