import { Link } from "react-router-dom";
import React from "react";
import "./Login.css";
import Logo from "../../components/logo/Logo";
import Form from "../../components/LoginForm/LoginForm";
import Registerbutton from "../../components/registration/Registerbutton";

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
