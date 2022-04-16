import React from "react";
import { HomeContentContainer } from "../../components/HomeContentContainer/HomeContentContainer";
import "./styles.css";

export const Home = ({
  toDoListData,
  handleSelectCurrentList,
  currentToDoList,
  handleListItemStatusChange,
  NewListData,
}) => {
  return (
    <div className="home">
      <HomeContentContainer
        toDoListData={toDoListData}
        handleSelectCurrentList={handleSelectCurrentList}
        currentToDoList={currentToDoList}
        handleListItemStatusChange={handleListItemStatusChange}
        NewListData={NewListData}
      />
    </div>
  );
};
