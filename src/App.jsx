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
import store from "./store/main/store";
import routes from "./routes/default.routes";

export const user = {
  username: "admin",
  pass: "admin",
};
const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const toggleLogged = () => {
    const { LOGGED } = store.getState();
    setIsLogged(LOGGED);
  };

  store.subscribe(toggleLogged);

  return (
    <Router>
      <Switch>
        {routes.map(({ route, component: Component }) => {
          return (
            <Route key={uuid()} exact path={`${route}`}>
              <Main key={uuid()}>
                <Component />
              </Main>
            </Route>
          );
        })}

        {!isLogged ? <Redirect to="/login" /> : <Redirect to="/" />}
      </Switch>
    </Router>
  );
};

export default App;
