import react, { useState, useEffect } from "react";
import { Home } from "./views/Home/Home";
import { MainNavbar } from "./components/MainNavbar/MainNavbar";
import data from "./data.json";

function App() {
  const [toDoListData, setToDoListsData] = useState(data);

  useEffect(() => {
    console.log(toDoListData);
  }, []);

  //handle Select List button click from the "sidebarToDoLists" component

  const handleSelectCurrentList = (singleList) => {
    console.log(singleList);
  };

  return (
    <>
      <MainNavbar />
      <Home
        data={toDoListData}
        handleSelectCurrentList={handleSelectCurrentList}
      />
    </>
  );
}

export default App;
