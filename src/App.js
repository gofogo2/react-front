import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./Topbar";
import "./App.css";
import Home from "./views/Home/home";

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
};

export default App;
