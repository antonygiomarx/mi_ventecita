/* eslint-disable jsx-a11y/label-has-associated-control */
import "./Register.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import Input from "../input/Input";
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
    <div className="Login">
      <div>
        <Logo />
        <form className="form">
          <label htmlFor="name">Nombre completo</label>
          <Input
            type="text"
            value={nombreCompleto}
            onChange={(e) => SetnombreCompleto(e.target.value)}
            errorNombre={nombreError}
            id="name"
            name="NombreCompleto"
          />

          {nombreError && <label>Nombre inválido</label>}
          <label htmlFor="username">Nombre de Usuario</label>
          <Input
            name="username"
            id="username"
            type="text"
            value={nombreUsuario}
            onChange={(e) => {
              SetnombreUsuario(e.target.value);
            }}
          />
          <label htmlFor="email"> Email </label>
          <Input type="email" id="email" name="email" />
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
      <div />
    </div>
  );
};
export default Register;
