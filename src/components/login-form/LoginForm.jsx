/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Badge, Button, Checkbox, Input } from "antd";
import { Redirect } from "react-router-dom";

import "./LoginForm.css";
import AUTH_ACTIONS from "../../redux/actions/auth.actions";
import { FIREBASE_SERVICE } from "../../firebase/firebase";

const Form = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [user, setUser] = useState({});

  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const login = async () => {
    // const { auth } = config;
    try {
      const { username, password } = credentials;
      const {
        user: authUser,
      } = await FIREBASE_SERVICE.AUTH.signInWithEmailAndPassword(
        FIREBASE_SERVICE.AUTH.getAuth(),
        username,
        password
      );
      setUser(authUser);
    } catch (error) {
      console.log(`Error en loginForm -> ${error.message}`);
    }
    if (user) {
      AUTH_ACTIONS.LOGGED(true);
      <Redirect to="/" />;
    } else {
      setIncorrectPassword(true);
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

      <Checkbox>Recuerdame</Checkbox>

      <Button type="link" className="linkButton">
        ¿Olvidaste tu contraseña?
      </Button>

      {incorrectPassword && (
        <Badge
          status="error"
          text="Correo o Contraseña Incorrecta"
          color="red"
          title="Correo o Contraseña Incorrecta"
        />
      )}
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
