/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Button, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import "../../../view/login/Login.css";
import Input from "../input/Input";

const Form = () => {
  const history = useHistory();
  return (
    <form className="form">
      <label htmlFor="user">Nombre de Usuario</label>
      <Input name="usuario" type="text" id="user" />

      <label htmlFor="email-form">Email</label>
      <Input name="correo" type="email" id="email-form" />

      <label htmlFor="pass-form">Contraseña</label>
      <Input name="contraseña" type="password" id="pass-form" />
      <Checkbox> Recuerdame</Checkbox>
      <Button type="link" className="linkButton">
        ¿Olvidaste tu contraseña?
      </Button>
      <Button
        type="primary"
        className="button"
        onClick={() => history.push("/card")}
      >
        Iniciar sesión
      </Button>
    </form>
  );
};

export default Form;
