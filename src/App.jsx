import React, { useState } from "react";
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
import Login from "./views/login/Login";
import Register from "./components/registration/Register";
import Main from "./layout/main/Main";
import routes from "./routes/default.routes";
// import Home from "./views/home/Home";
// import StoreComponent from "./components/store/Store";

const App = () => {
  const { getState, subscribe } = store;

  const [isLogged, setIsLogged] = useState(false);

  const toggleLogged = () => {
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
