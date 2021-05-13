/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Button, Checkbox, Input } from "antd";
import { Redirect } from "react-router-dom";

import "./LoginForm.css";
import AUTH_ACTIONS from "../../redux/actions/auth.actions";
import config from "../../config/config";

const Form = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const login = () => {
    const { auth } = config;
    const { username, password } = credentials;

    if (username === auth.username && password === auth.password) {
      AUTH_ACTIONS.LOGGED(true);
      <Redirect to="/" />;
    }
  };

  return (
    <form className="form">
      <label htmlFor="user">Nombre de Usuario</label>
      <Input
        placeholder="Nombre de Usuario"
        name="usuario"
        type="text"
        id="user"
        className="input"
        onChange={({ target }) => {
          setCredentials({
            ...credentials,
            username: target.value,
          });
        }}
      />

      <label htmlFor="pass-form">Contraseña</label>
      <Input.Password
        placeholder="Contraseña"
        name="contraseña"
        type="password"
        id="pass-form"
        className="input"
        onChange={({ target }) => {
          setCredentials({
            ...credentials,
            password: target.value,
          });
        }}
      />

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
