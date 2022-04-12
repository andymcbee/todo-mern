import React from "react";
import { HomeContentContainer } from "../../components/HomeContentContainer/HomeContentContainer";
import "./styles.css";

export const Home = ({ data, handleSelectCurrentList }) => {
  return (
    <div className="home">
      <HomeContentContainer
        data={data}
        handleSelectCurrentList={handleSelectCurrentList}
      />
    </div>
  );
};
