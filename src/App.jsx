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

import Main from "./layout/main/Main";
import store from "./store/main/store";
import routes from "./routes/default.routes";
import Login from "./views/login/Login";
import Register from "./layout/loginComponents/registration/Register";

const App = () => {
  const { getState, subscribe } = store;
  const [isLogged, setIsLogged] = useState(false);
  const toggleLogged = () => {
    const { AUTH_REDUCER } = getState();
    const { logged } = AUTH_REDUCER;
    setIsLogged(logged);
  };

  const [{ component: Home }] = routes.filter(
    (route) => route.name === "Dashboard"
  );

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
            <Route>
              <Main>
                <Home />
              </Main>
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
