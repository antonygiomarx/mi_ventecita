import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { v4 as uuid } from "uuid";

import Main from "./layout/main/Main";
import Login from "./view/login/Login";
import store from "./store/main/store";
import routes from "./routes/default.routes";
import Register from "./layout/loginComponents/registration/Register";

export const user = {
  username: "admin",
  pass: "admin",
};
const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const toggleLogged = () => {
    const { logged } = store.getState();
    setIsLogged(logged);
  };

  store.subscribe(toggleLogged);

  return (
    <Router>
      <Switch>
        {routes.map(({ route, component: Component }) => {
          if (Component === Login) {
            return (
              <Route key={uuid()} exact path={`${route}`}>
                <Login />
              </Route>
            );
          }
          if (Component === Register) {
            return (
              <Route key={uuid()} exact path={`${route}`}>
                <Register />
              </Route>
            );
          }
          return (
            <Route key={uuid()} exact path={`${route}`}>
              <Main>
                <Component />
              </Main>
            </Route>
          );
        })}
        {!isLogged ? <Redirect to="/login" /> : <Redirect to="/store" />}
      </Switch>
    </Router>
  );
};

export default App;
