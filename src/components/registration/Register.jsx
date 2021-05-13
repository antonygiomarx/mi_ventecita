/* eslint-disable jsx-a11y/label-has-associated-control */
import "./Register.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Input } from "antd";
import { MailOutlined, UserOutlined, TeamOutlined } from "@ant-design/icons";
import Logo from "../logo/Logo";

const Register = () => {
  const history = useHistory();
  const [information, setInformation] = useState({
    Nombre: "",
    username: "",
    password: "",
    email: "",
    passwordVerification: "",
    disable: "",
  });
  console.log(information);
  const {
    password,
    username,
    Nombre,
    email,
    passwordVerification,
  } = information;
  let { disable } = information;
  if (
    password !== passwordVerification ||
    password.length <= 6 ||
    !username.length ||
    !Nombre.length ||
    !email.length
  ) {
    disable = true;
  } else {
    disable = false;
  }

  return (
    <div className="login">
      <div>
        <Logo />
        <form className="form-register">
          <label>Nombre completo</label>
          <Input
            prefix={<TeamOutlined />}
            onChange={({ target }) =>
              setInformation({ ...information, Nombre: target.value })
            }
            className="inputRegister"
            placeholder="Nombre Completo"
          />
          <label>Nombre de Usuario</label>
          <Input
            placeholder="Nombre de Usuario"
            prefix={<UserOutlined />}
            onChange={({ target }) =>
              setInformation({ ...information, username: target.value })
            }
            className="inputRegister"
          />
          <label> Email </label>
          <Input
            placeholder="Email"
            prefix={<MailOutlined />}
            onChange={({ target }) =>
              setInformation({ ...information, email: target.value })
            }
            type="email"
            id="email"
            name="email"
            className="inputRegister"
          />
          <label>Contraseña</label>
          <Input.Password
            placeholder="Contraseña"
            type="password"
            id="pass-register"
            name="pass-register"
            onChange={({ target }) =>
              setInformation({ ...information, password: target.value })
            }
            className="inputRegister"
          />
          {password.length > 0 && password.length < 6 && (
            <label className="error">Mínimo 6 caracteres</label>
          )}
          <br />
          <label> Verificación Contraseña</label>
          <Input
            placeholder="Ingrese nuevamente la contraseña"
            type="password"
            id="pass-register"
            name="pass-register"
            onChange={({ target }) =>
              setInformation({
                ...information,
                passwordVerification: target.value,
              })
            }
            className="inputRegister"
          />
          {password !== passwordVerification && (
            <label className="error">Contraseñas no coinciden</label>
          )}
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
            top: "50px",
          }}
        >
          Go back
        </Button>
        <Button
          type="primary"
          disabled={disable}
          htmlType="submit"
          className="button-register"
        >
          Registrate
        </Button>
      </div>
      <div className="rightside" />
    </div>
  );
};
export default Register;
