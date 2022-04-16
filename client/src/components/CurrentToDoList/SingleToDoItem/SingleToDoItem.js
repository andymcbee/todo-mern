import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";

export const SingleToDoItem = ({
  toDoItem,
  currentToDoList,
  handleListItemStatusChange,
}) => {
  const [toDoStatus, setToDoStatus] = useState(toDoItem?.completionStatus);
  const [toDoItemText, setToDoItemText] = useState(toDoItem?.text);
  const [editItem, setEditItem] = useState(false);

  useEffect(() => {
    //populate states after change. Consider changing this toa  "current item" held in state via redux?
    setToDoItemText(toDoItem?.text);
    setToDoStatus(toDoItem?.completionStatus);
  });

  useEffect(() => {
    //update items

    const updatedItems = currentToDoList?.toDoItems?.map((item) => {
      if (item._id === toDoItem._id) {
        return { ...item, text: toDoItemText, completionStatus: toDoStatus };
      } else {
        return item;
      }
    });
    //update entire list

    const updatedList = {
      ...currentToDoList,
      toDoItems: updatedItems,
    };

    // pass updated list to App to reflect changes app-wide
    handleListItemStatusChange(updatedList);
  }, [editItem, toDoStatus]);

  const handleStatusUpdate = async () => {
    setToDoStatus(!toDoStatus);
  };

  return (
    <div className="toDoListItems" key={toDoItem._id}>
      <div className="currentToDoListCheckbox">
        <Checkbox checked={toDoStatus} onChange={handleStatusUpdate} />
      </div>
      {editItem ? (
        <div className="currentToDoListItemText">
          <input
            value={toDoItemText}
            onChange={(e) => setToDoItemText(e.target.value)}
          />
        </div>
      ) : (
        <div className="currentToDoListItemText">{toDoItemText}</div>
      )}
      {editItem ? (
        <button
          className="currentToDoListButton"
          onClick={() => setEditItem(!editItem)}
        >
          Save
        </button>
      ) : (
        <button
          className="currentToDoListButton"
          onClick={() => setEditItem(!editItem)}
        >
          Edit
        </button>
      )}
    </div>
  );
};
