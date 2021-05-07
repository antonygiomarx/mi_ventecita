import React from "react";
import "./Login.css";
import Registerbutton from "../../layout/footer/loginComponents/registration/Registerbutton";
import Form from "../../layout/footer/loginComponents/form/Form";
import Logo from "../../layout/footer/loginComponents/logo/Logo";

function Login() {
  return (
    <div className="Login">
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
