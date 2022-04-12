import React from "react";
import "./styles.css";

export const SidebarToDoListSingle = ({ list, handleSelectCurrentList }) => {
  return (
    <div className="sidebarToDoListSingle">
      <div className="sidebarListTitle">{list.listTitle}</div>
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
