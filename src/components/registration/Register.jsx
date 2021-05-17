/* eslint-disable jsx-a11y/label-has-associated-control */
import "./Register.css";
import React, { useEffect, useState } from "react";
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

  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isCheckedPassword, setIsCheckedPassword] = useState(false);

  console.log(information);
  const {
    password,
    username,
    Nombre,
    email,
    passwordVerification,
  } = information;

  const passwordValidation = () => {
    if (password.length > 5) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  };
  useEffect(() => {
    const ac = new AbortController();
    passwordValidation();
    return () => {
      ac.abort();
    };
  }, [password]);
  const checkPasswords = () => {
    if (password === passwordVerification) {
      setIsCheckedPassword(true);
    } else {
      setIsCheckedPassword(false);
    }
  };

  let { disable } = information;
  if (
    password !== passwordVerification ||
    !isValidPassword ||
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
            onChange={({ target }) => {
              setInformation({ ...information, Nombre: target.value });
            }}
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
            onChange={({ target }) => {
              setInformation({ ...information, password: target.value });
              passwordValidation();
            }}
            className="inputRegister"
          />
          {!isValidPassword && password.length > 0 && (
            <label className="error">Mínimo 6 caracteres</label>
          )}
          <br />
          <label> Verificación Contraseña</label>
          <Input
            placeholder="Ingrese nuevamente la contraseña"
            type="password"
            id="pass-register"
            name="pass-register"
            onChange={({ target }) => {
              setInformation({
                ...information,
                passwordVerification: target.value,
              });
              checkPasswords();
            }}
            className="inputRegister"
          />
          {isCheckedPassword && isValidPassword && (
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
