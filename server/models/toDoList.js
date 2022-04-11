import mongoose from "mongoose";

const toDoListSchema = new mongoose.Schema({
  title: String,
  toDoItems: [
    {
      text: String,
      completionStatus: { type: Boolean, default: false },
      completionDate: Date,
    },
  ],
});

const ToDoList = mongoose.model("ToDoList", toDoListSchema);

export default ToDoList;
