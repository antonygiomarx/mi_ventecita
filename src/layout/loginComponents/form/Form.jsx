/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Button, Checkbox } from "antd";
import { Redirect } from "react-router-dom";

import "./Form.css";
import Input from "../input/Input";
import store from "../../../store/main/store";
import loginActions from "../../../reducers/actions/login.actions";

const Form = () => {
  const [credentials, setCredentials] = useState({});
  const loginCheck = () => {
    const { username, password } = store.getState();

    setCredentials({
      username,
      password,
    });
  };

  const login = () => {
    const { username, password } = credentials;
    if (username === "admin" && password === "admin") {
      loginActions.SET_LOGGED();
      <Redirect to="/" />;
    }
  };

  store.subscribe(loginCheck);
  return (
    <form className="form">
      <label htmlFor="user">Nombre de Usuario</label>
      <Input name="usuario" type="text" id="user" />

      <label htmlFor="pass-form">Contraseña</label>
      <Input isPassword name="contraseña" type="password" id="pass-form" />
      <Checkbox> Recuerdame</Checkbox>
      <Button type="link" className="linkButton">
        ¿Olvidaste tu contraseña?
      </Button>
      <Button
        type="primary"
        className="button"
        onClick={() => {
          login();
        }}
      >
        Iniciar sesión
      </Button>
    </form>
  );
};

export default Form;
