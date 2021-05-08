import { Link } from "react-router-dom";
import React from "react";
import "./Login.css";
import Registerbutton from "../../layout/loginComponents/registration/Registerbutton";
import Form from "../../layout/loginComponents/form/Form";
import Logo from "../../layout/loginComponents/logo/Logo";

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
