import React from "react";
import "./Login.css";
import Registerbutton from "../../layout/loginComponents/registration/Registerbutton";
import Form from "../../layout/loginComponents/form/Form";
import Logo from "../../layout/loginComponents/logo/Logo";

function Login() {
  return (
    <div className="login">
      <div className="leftside">
        <Logo />
        <Form />
        <Registerbutton />
      </div>
      <div className="rightside" />
    </div>
  );
}

export default Login;
