/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { Button, Checkbox, Input, message } from "antd";
import { Redirect } from "react-router-dom";

import "./LoginForm.css";
import AUTH_ACTIONS from "../../redux/actions/auth.actions";
import { FirebaseService } from "../../firebase/firebase";
import { setSessionToLocalStorage } from "../../utils/utils";

const Form = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [user, setUser] = useState({});

  const login = async () => {
    try {
      const { username, password } = credentials;

      await FirebaseService.getAuth()().setPersistence(
        FirebaseService.getAuth().Auth.Persistence.SESSION,
      );

      const { user: authUser } =
        await FirebaseService.getAuth()().signInWithEmailAndPassword(
          username,
          password,
        );

      setUser({ authUser });
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          message.error("Usuario no existe");
          break;
        case "auth/wrong-password":
          message.error("Correo o contraseña incorrectos");
          break;
        default:
          message.error("Error al iniciar sesion");
          break;
      }
    }
    if (user) {
      AUTH_ACTIONS.LOGGED(true);
      setSessionToLocalStorage("true");
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
    </form>
  );
};

export default Form;
