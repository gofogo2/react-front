import logo from "./logo.svg";
import "./App.css";
import "./assets/css/common.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./views/Login/Login";
import Main from "./views/Main/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" name="" component={Login} />
        <Route exact path="/main" name="" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
