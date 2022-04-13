import React from "react";
import "./styles.css";
import { SingleToDoItem } from "./SingleToDoItem/SingleToDoItem";

export const CurrentToDoList = ({
  currentToDoList,
  handleListItemStatusChange,
}) => {
  return (
    <div className="CurrentToDoList">
      <div>{currentToDoList?.listTitle}</div>
      <div>
        {currentToDoList?.toDoItems.map((toDoItem) => {
          return (
            <SingleToDoItem
              toDoItem={toDoItem}
              currentToDoList={currentToDoList}
              handleListItemStatusChange={handleListItemStatusChange}
            />
          );
        })}
      </div>
    </div>
  );
};

//onChange={handleChange}
