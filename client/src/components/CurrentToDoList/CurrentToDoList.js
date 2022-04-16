import React from "react";
import "./styles.css";
import { SingleToDoItem } from "./SingleToDoItem/SingleToDoItem";

export const CurrentToDoList = ({
  currentToDoList,
  handleListItemStatusChange,
}) => {
  console.log("CURRENT TO DO LIOST COMP");
  console.log(currentToDoList);
  return (
    <div className="CurrentToDoList">
      <div>{currentToDoList?.title}</div>
      <div>
        {currentToDoList?.toDoItems?.map((toDoItem) => {
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
