import react, { useState, useEffect } from "react";
import { Home } from "./views/Home/Home";
import { MainNavbar } from "./components/MainNavbar/MainNavbar";
import data from "./data.json";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  ///START REDUX
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { getLists } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    // getLists();
    getLists();
  }, []);

  //END REDUX
  // **I don't thik I need this. Need to access direct from Redux const [toDoListData, setToDoListsData] = useState(null);
  const [currentToDoList, setCurrentToDoList] = useState(null);
  //  const [currentToDoList, setCurrentToDoList] = useState(data.data[0]);

  const handleListItemStatusChange = (updatedToDoList) => {
    console.log("HANDLE LIST FIRED");
    console.log(updatedToDoList);
    const updatedLists = data.data.map((item) => {
      if (item._id === updatedToDoList._id) {
        return updatedToDoList;
      } else {
        return item;
      }
    });
    //THIS LOOKS LIKE IT NEEDS FIXED...
    const updatedData = {
      data: updatedLists,
    };

    //TEMP   setToDoListsData(updatedData);
    setCurrentToDoList(updatedToDoList);
  };

  const NewListData = (newListData) => {
    console.log("NEW LIST FIRED");
    //TEMP    console.log(toDoListData.data);

    //TEMP  const allNewData = toDoListData;

    //TEMP   allNewData.data.push(newListData);

    //TEMP   console.log(allNewData);

    //TEMP    setToDoListsData(allNewData);
    setCurrentToDoList(newListData);
  };

  //handle Select List button click from the "sidebarToDoLists" component

  const handleSelectCurrentList = (singleList) => {
    console.log("HANDLE SELECT CURRENT LIST FIRED");
    console.log(singleList);
    setCurrentToDoList(singleList);
  };

  return (
    <>
      <MainNavbar />

      <Home
        toDoListData={state.lists} //just pass the array of lists down - nothing more.
        handleSelectCurrentList={handleSelectCurrentList}
        currentToDoList={currentToDoList}
        handleListItemStatusChange={handleListItemStatusChange}
        NewListData={NewListData}
      />
    </>
  );
}

export default App;

//   <div>{state.lists[0]?.id}</div>
