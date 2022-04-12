import React from "react";
import { SidebarToDoListSingle } from "../SidebarToDoListSingle/SidebarToDoListSingle";
import "./styles.css";
export const SidebarToDoLists = ({ data, handleSelectCurrentList }) => {
  // console.log(data);
  return (
    <div>
      <h1 className="sidebarMainTitle">All Lists</h1>

      <div>
        {data?.data.map((toDoList) => {
          // console.log(toDoList);
          return (
            <SidebarToDoListSingle
              key={toDoList.id}
              list={toDoList}
              handleSelectCurrentList={handleSelectCurrentList}
            />
          );
        })}
      </div>
    </div>
  );
};
