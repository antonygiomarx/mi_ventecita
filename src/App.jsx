import React, { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { v4 as uuid } from "uuid";

import store from "./store/main/store";
import routes from "./routes/default.routes";
import Main from "./layout/Main/Main";
import Login from "./views/Login/Login";
import Register from "./components/Registration/Register";
import { getSessionFromLocalStorage } from "./utils/utils";

const App = () => {
  const { getState, subscribe } = store;

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    const sessionInStorage = getSessionFromLocalStorage();

    if (sessionInStorage === "true") {
      setIsLogged(true);
    }

    return () => {
      ac.abort();
    };
  }, []);

  const toggleLogged = async () => {
    const { AUTH_REDUCER } = getState();
    const { logged } = AUTH_REDUCER;
    setIsLogged(logged);
  };

  subscribe(toggleLogged);

  return (
    <Router>
      <Switch>
        {!isLogged ? (
          <>
            <Redirect push to="/login" />
            <Route key={uuid()} exact path="/login" component={Login} />
            <Route key={uuid()} exact path="/register" component={Register} />
          </>
        ) : (
          <>
            <Redirect push to="/" />
            <Main>
              {routes.map(({ route, component }) => {
                return (
                  <Route
                    exact
                    path={`${route}`}
                    component={component}
                    key={uuid()}
                  />
                );
              })}
            </Main>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
