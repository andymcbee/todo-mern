import react, { useState, useEffect } from "react";
import { Home } from "./views/Home/Home";
import { MainNavbar } from "./components/MainNavbar/MainNavbar";
import data from "./data.json";

function App() {
  const [toDoListData, setToDoListsData] = useState(data);
  const [currentToDo, setCurrentToDo] = useState(null);
  //  console.log(toDoListData);

  console.log(toDoListData);

  const handleListItemStatusChange = (toDoItem, currentListId) => {
    const newtoDoItems = currentToDo.toDoItems.map((item) => {
      if (item.id === toDoItem.id) {
        return (item = toDoItem);
      } else {
        return item;
      }
    });

    const updatedList = { ...currentToDo, toDoItems: newtoDoItems };

    const newToDoLists = toDoListData.data.map((item) => {
      if (item.id === currentListId) {
        return updatedList;
      } else {
        return item;
      }
    });

    const updatedData = { data: newToDoLists };
    console.log(updatedData);
    setToDoListsData(updatedData);
    setCurrentToDo(updatedList);
  };

  //handle Select List button click from the "sidebarToDoLists" component

  const handleSelectCurrentList = (singleList) => {
    setCurrentToDo(singleList);
  };

  return (
    <>
      <MainNavbar />
      <Home
        data={toDoListData}
        handleSelectCurrentList={handleSelectCurrentList}
        currentToDo={currentToDo}
        handleListItemStatusChange={handleListItemStatusChange}
      />
    </>
  );
}

export default App;
