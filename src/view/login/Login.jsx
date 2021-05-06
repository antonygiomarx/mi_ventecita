import React from "react";
import "./Login.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Form from "../../layout/loginComponents/form/Form";
import Registerbutton from "../../layout/loginComponents/registration/Registerbutton";
import Logo from "../../layout/loginComponents/logo/Logo";
import Register from "../../layout/loginComponents/registration/Register";

function Login() {
  return (
    <div className="Login">
      <div className="leftside">
        <Router>
          <Switch>
            <Route exact path="/login">
              <Logo />
              <Form />
              <Registerbutton />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
          <Redirect exact from="/register" to="/login" />
        </Router>
      </div>
      <div className="rightside" />
    </div>
  );
}

export default Login;
