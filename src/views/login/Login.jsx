import { Link } from "react-router-dom";
import React from "react";
import "./Login.css";
import Registerbutton from "../../components/registration/Registerbutton";
import Form from "../../components/login-form/LoginForm";
import Logo from "../../components/logo/Logo";

function Login() {
  return (
    <div className="login">
      <div>
        <Logo />
        <Form />
        <Registerbutton />
      </div>
      <div className="rightside" />
      <Link to="/login" />
    </div>
  );
}

export default Login;
