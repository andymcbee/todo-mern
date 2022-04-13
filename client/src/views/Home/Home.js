import React from "react";
import { HomeContentContainer } from "../../components/HomeContentContainer/HomeContentContainer";
import "./styles.css";

export const Home = ({
  data,
  handleSelectCurrentList,
  currentToDoList,
  handleListItemStatusChange,
}) => {
  return (
    <div className="home">
      <HomeContentContainer
        data={data}
        handleSelectCurrentList={handleSelectCurrentList}
        currentToDoList={currentToDoList}
        handleListItemStatusChange={handleListItemStatusChange}
      />
    </div>
  );
};
