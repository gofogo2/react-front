import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./Topbar";
import "./App.css";
const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">helloworld</div>
      </div>
    </div>
  );
};

export default App;
