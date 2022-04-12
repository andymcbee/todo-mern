import { Home } from "./views/Home/Home";
import { MainNavbar } from "./components/MainNavbar/MainNavbar";
import data from "./data.json";

function App() {
  return (
    <>
      <MainNavbar />
      <Home data={data} />
    </>
  );
}

export default App;
