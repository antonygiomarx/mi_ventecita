import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { v4 as uuid } from "uuid";

import Main from "./layout/main/Main";

import store from "./store/main/store";
import routes from "./routes/default.routes";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  console.log(isLogged);
  const toggleLogged = () => {
    const { logged } = store.getState();
    setIsLogged(logged);
  };

  const history = useHistory();

  store.subscribe(toggleLogged);

  return (
    <Router>
      <Switch>
        {routes.map(({ route, component: Component }) => {
          if (!isLogged && Component.name === "Login") {
            return (
              <Route key={uuid()} exact path={`${route}`}>
                {history.push(route)}
                <Component />
              </Route>
            );
          }
          if (!isLogged && Component.name === "Register") {
            return (
              <Route key={uuid()} exact path={`${route}`}>
                {history.push(route)}
                <Component />
              </Route>
            );
          }

          return (
            <Route key={uuid()} exact path="/">
              <Main>
                {history.push(route)}
                <Component />
              </Main>
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
