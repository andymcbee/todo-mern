import { CurrentToDoList } from "../CurrentToDoList/CurrentToDoList";
import { SidebarToDoLists } from "../SidebarToDoLists/SidebarToDoLists";
import "./styles.css";

import React from "react";

export const HomeContentContainer = ({ data, handleSelectCurrentList }) => {
  return (
    <div className="homeContentContainer">
      <div className="homeSidebar">
        <SidebarToDoLists
          data={data}
          handleSelectCurrentList={handleSelectCurrentList}
        />
      </div>
      <div className="homeMainContent">
        <CurrentToDoList data={data} />
      </div>
    </div>
  );
};
