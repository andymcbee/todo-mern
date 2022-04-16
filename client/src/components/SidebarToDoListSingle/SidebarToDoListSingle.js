import React from "react";
import "./styles.css";

export const SidebarToDoListSingle = ({ list, handleSelectCurrentList }) => {
  console.log("SIDEBAR TO DO LIST SINGLE COMPONENT");
  console.log(list);
  return (
    <div className="sidebarToDoListSingle">
      <div className="sidebarListTitle">{list.title}</div>
      <div className="sidebarListButtonContainer">
        <button
          className="sidebarListButton"
          onClick={() => handleSelectCurrentList(list)}
        >
          Select
        </button>
      </div>
    </div>
  );
};
