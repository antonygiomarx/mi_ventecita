/* eslint-disable jsx-a11y/label-has-associated-control */
import "./Register.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Input } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import Logo from "../logo/Logo";
import InputPassword from "../input/InputPassword";

const Register = () => {
  function hasNumbers(x) {
    const regex = /\d/g;
    return regex.test(x);
  }
  const history = useHistory();
  const [nombreCompleto, SetnombreCompleto] = useState("");
  const [nombreUsuario, SetnombreUsuario] = useState("");
  const [nombreError, SetnombreError] = useState(false);
  useEffect(() => {
    if (hasNumbers(nombreCompleto)) {
      SetnombreError(true);
    } else {
      SetnombreError(false);
    }
  }, [nombreCompleto]);
  return (
    <div className="login">
      <div>
        <Logo />
        <form className="form">
          <label>Nombre completo</label>
          <Input
            value={nombreCompleto}
            prefix={<UserOutlined />}
            onChange={(e) => SetnombreCompleto(e.target.value)}
            className="inputRegister"
          />
          {nombreError && <label>Nombre inválido</label>}
          <label>Nombre de Usuario</label>
          <Input
            value={nombreUsuario}
            prefix={<UserOutlined />}
            onChange={(e) => SetnombreUsuario(e.target.value)}
            className="inputRegister"
          />
          <label> Email </label>
          <Input
            prefix={<MailOutlined />}
            type="email"
            id="email"
            name="email"
            className="inputRegister"
          />
          <InputPassword />
        </form>
        <Button
          type="primary"
          onClick={() => history.push("/login")}
          className="button"
          style={{
            backgroundColor: "#4781ed",
            width: "35%",
            left: "2%",
            textAlign: "center",
            top: "-40px",
          }}
        >
          Go back
        </Button>
      </div>
      <div className="rightside" />
    </div>
  );
};
export default Register;
