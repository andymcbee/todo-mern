import react, { useState, useEffect } from "react";
import { Home } from "./views/Home/Home";
import { MainNavbar } from "./components/MainNavbar/MainNavbar";
import data from "./data.json";

function App() {
  const [toDoListData, setToDoListsData] = useState(data);
  const [currentToDoList, setCurrentToDoList] = useState(null);

  const handleListItemStatusChange = (updatedToDoList) => {
    const updatedLists = data.data.map((item) => {
      if (item.id === updatedToDoList.id) {
        return updatedToDoList;
      } else {
        return item;
      }
    });

    const updatedData = {
      data: updatedLists,
    };

    setToDoListsData(updatedData);
    setCurrentToDoList(updatedToDoList);
  };

  //handle Select List button click from the "sidebarToDoLists" component

  const handleSelectCurrentList = (singleList) => {
    setCurrentToDoList(singleList);
  };

  return (
    <>
      <MainNavbar />
      <Home
        data={toDoListData}
        handleSelectCurrentList={handleSelectCurrentList}
        currentToDoList={currentToDoList}
        handleListItemStatusChange={handleListItemStatusChange}
      />
    </>
  );
}

export default App;
