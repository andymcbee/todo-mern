import { CurrentToDoList } from "../CurrentToDoList/CurrentToDoList";
import { SidebarToDoLists } from "../SidebarToDoLists/SidebarToDoLists";
import "./styles.css";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Modal } from "@mui/material";

import React from "react";

export const HomeContentContainer = ({
  toDoListData,
  handleSelectCurrentList,
  currentToDoList,
  handleListItemStatusChange,
  NewListData,
}) => {
  return (
    <div className="homeContentContainer">
      <div className="homeSidebar">
        <SidebarToDoLists
          toDoListData={toDoListData}
          handleSelectCurrentList={handleSelectCurrentList}
          NewListData={NewListData}
        />
      </div>
      <div className="homeMainContent">
        <CurrentToDoList
          currentToDoList={currentToDoList}
          handleListItemStatusChange={handleListItemStatusChange}
        />
      </div>
      <div className="homeContentSpacer"></div>
    </div>
  );
};
