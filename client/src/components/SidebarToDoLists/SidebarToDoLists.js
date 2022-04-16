import React, { useState } from "react";
import { SidebarToDoListSingle } from "../SidebarToDoListSingle/SidebarToDoListSingle";
import "./styles.css";
import { AddNewListModal } from "../AddNewListModal/AddNewListModal";
export const SidebarToDoLists = ({
  toDoListData,
  handleSelectCurrentList,
  NewListData,
}) => {
  return (
    <div>
      <div className="sidebarTopTitleButton">
        <h1 className="sidebarMainTitle">All Lists</h1>
        <AddNewListModal NewListData={NewListData} />
      </div>

      <div>
        {toDoListData?.map((toDoList) => {
          // console.log(toDoList);
          return (
            <SidebarToDoListSingle
              key={toDoList?.id}
              list={toDoList}
              handleSelectCurrentList={handleSelectCurrentList}
            />
          );
        })}
      </div>
    </div>
  );
};
