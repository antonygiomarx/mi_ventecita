/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Button, Checkbox, Input } from "antd";
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

      // await FIREBASE_SERVICE.AUTH().setPersistence(
      //   FIREBASE_SERVICE.AUTH().getAuth(),
      //   FIREBASE_SERVICE.AUTH().browserSessionPersistence
      // );

      const {
        user: authUser,
      } = await FIREBASE_SERVICE.AUTH().signInWithEmailAndPassword(
        username,
        password
      );

      console.log("usuario", authUser);

      setUser(authUser);
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        setIncorrectPassword(true);
      }
    }
    if (user) {
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
        onPressEnter={login}
      />

      <Checkbox>Recuerdame</Checkbox>

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
      {incorrectPassword && (
        <label className="error">Correo o Contraseña Incorrectos</label>
      )}
    </form>
  );
};

export default Form;
