import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { v4 as uuid } from "uuid";

import Register from "./components/Registration/Register";
import routes from "./routes/default.routes";
import store from "./store/main/store";
import { getSessionFromLocalStorage } from "./utils/utils";
import Login from "./views/Login/Login";
import Main from "./layout/Main/Main";

const App = (): JSX.Element => {
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
    const { logged }: any = AUTH_REDUCER;
    setIsLogged(logged);
  };

  subscribe(toggleLogged);

  const app = (
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
              {routes.map(({ route, component: Component }) => {
                return (
                  <Route exact path={`${route}`} key={uuid()}>
                    {Component}
                  </Route>
                );
              })}
            </Main>
          </>
        )}
      </Switch>
    </Router>
  );

  return app;
};

export default App;
