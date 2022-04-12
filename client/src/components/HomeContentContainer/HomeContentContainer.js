import { CurrentToDoList } from "../CurrentToDoList/CurrentToDoList";
import { SidebarToDoLists } from "../SidebarToDoLists/SidebarToDoLists";
import "./styles.css";

import React from "react";

export const HomeContentContainer = ({ data }) => {
  return (
    <div className="homeContentContainer">
      <div className="homeSidebar">
        <SidebarToDoLists data={data} />
      </div>
      <div className="homeMainContent">
        <CurrentToDoList data={data} />
      </div>
    </div>
  );
};
