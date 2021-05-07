import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "./layout/main/Main";
import Register from "./layout/footer/loginComponents/registration/Register";
import Login from "./view/login/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/card" component={Main} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
