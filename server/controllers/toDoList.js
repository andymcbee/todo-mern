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
  const { listId, listItemId } = req.params;
  const { text, completionStatus } = req.body.toDoItems;

  const listQuery = {
    _id: listId,
  };

  //Look up entire original list (Including title + all other to do items)
  const originalList = await ToDoList.findOne(listQuery);

  //map through array of list items within originalList object
  //and update relevant one while eturning all others unchanged
  const updatedToDoItem = await originalList.toDoItems.map((item) => {
    if (item.id === listItemId) {
      const activeListItem = {
        text: text,
        completionStatus: completionStatus,
        _id: item._id,
      };
      return activeListItem;
    } else {
      return item;
    }
  });

  const completedOjbect = (originalList, updatedToDoItem) => {
    //console.log(originalList);
    // console.log(updatedToDoItem);
    //  console.log(originalList.toDoItems);

    let finalObject = {
      title: req.body.title,
      _id: originalList._id,
      toDoItems: updatedToDoItem,
    };

    return finalObject;
  };

  let finalValueReal = await completedOjbect(originalList, updatedToDoItem);

  console.log(finalValueReal);
  await finalValueReal.save();
};
