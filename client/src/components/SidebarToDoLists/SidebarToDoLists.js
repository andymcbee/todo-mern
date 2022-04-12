import React from "react";
import { SidebarToDoListSingle } from "../SidebarToDoListSingle/SidebarToDoListSingle";

export const SidebarToDoLists = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>All Lists</div>
      <div>
        {data.data.map((toDoList) => {
          return <SidebarToDoListSingle list={toDoList} />;
        })}
      </div>
    </div>
  );
};
