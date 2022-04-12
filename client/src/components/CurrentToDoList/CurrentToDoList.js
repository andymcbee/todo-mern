import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

export const CurrentToDoList = ({
  currentToDo,
  handleListItemStatusChange,
}) => {
  //console.log(currentToDo);
  // const [checked, setChecked] = React.useState(currentToDo.status);
  // console.log(currentToDo);

  const handleStatusChange = (newStatus, toDoItem) => {
    //  console.log(newStatus);
    // console.log(toDoItem);

    toDoItem = { ...toDoItem, status: newStatus };

    // console.log(toDoItem);
    handleListItemStatusChange(toDoItem, currentToDo.id);
  };

  //

  return (
    <div className="CurrentToDoList">
      <div>{currentToDo?.listTitle}</div>
      <div>
        {currentToDo?.toDoItems.map((toDoItem, index) => {
          return (
            <div className="toDoListItems" key={toDoItem.id}>
              <div>
                <Checkbox
                  checked={toDoItem?.status}
                  onChange={() =>
                    handleStatusChange(!toDoItem.status, toDoItem)
                  }
                />
              </div>
              <div>{toDoItem?.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

//onChange={handleChange}
