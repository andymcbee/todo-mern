import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import "./styles.css";

export const SingleToDoItem = ({
  toDoItem,
  currentToDoList,
  handleListItemStatusChange,
}) => {
  const [toDoStatus, setToDoStatus] = useState(toDoItem?.status);
  const [toDoItemText, setToDoItemText] = useState(toDoItem?.text);
  const [editItem, setEditItem] = useState(false);

  useEffect(() => {
    console.log("USE EFFECT FIRED");

    //update items

    const updatedItems = currentToDoList.toDoItems.map((item) => {
      if (item.id === toDoItem.id) {
        return { ...item, text: toDoItemText, status: toDoStatus };
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
    <div className="toDoListItems" key={toDoItem.id}>
      <Alert className="successAlert" severity="error">
        This is an error alert — check it out!
      </Alert>
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
