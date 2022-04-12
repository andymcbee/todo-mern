import React from "react";
import { HomeContentContainer } from "../../components/HomeContentContainer/HomeContentContainer";
import "./styles.css";

export const Home = ({
  data,
  handleSelectCurrentList,
  currentToDo,
  handleListItemStatusChange,
}) => {
  return (
    <div className="home">
      <HomeContentContainer
        data={data}
        handleSelectCurrentList={handleSelectCurrentList}
        currentToDo={currentToDo}
        handleListItemStatusChange={handleListItemStatusChange}
      />
    </div>
  );
};
