/* eslint-disable jsx-a11y/label-has-associated-control */
import "./Register.css";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, Input } from "antd";
import { MailOutlined, UserOutlined, TeamOutlined } from "@ant-design/icons";

import { FirebaseService } from "../../firebase/firebase";
import Logo from "../Logo/Logo";

const Register = (): JSX.Element => {
  const [name, setName] = useState("");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const [passwordVerification, setPasswordVerification] = useState("");

  const [disabled, setDisabled] = useState(true);

  const [isValidPassword, setIsValidPassword] = useState(false);

  const [isCheckedPassword, setIsCheckedPassword] = useState(false);

  const [emailExists, setEmailExists] = useState(false);

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
  });
  const checkPasswords = () => {
    if (password === passwordVerification) {
      setIsCheckedPassword(true);
    } else {
      setIsCheckedPassword(false);
    }
  };

  if (
    password !== passwordVerification ||
    !isValidPassword ||
    !username.length ||
    !name.length ||
    !email.length
  ) {
    setDisabled(true);
  } else {
    setDisabled(false);
  }

  const registerUser = async () => {
    try {
      // eslint-disable-next-line max-len
      const newUser =
        await FirebaseService.getAuth()().createUserWithEmailAndPassword(
          email,
          password,
        );
      if (newUser) {
        FirebaseService.getAuth()().updateCurrentUser(newUser.user);
      }
    } catch (error) {
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        setEmailExists(true);
      }
    }
  };

  return (
    <div className="login">
      <div>
        <Logo />
        <form className="form-register">
          <label htmlFor="input-name">Nombre completo</label>
          <Input
            id="input-name"
            prefix={<TeamOutlined />}
            onChange={({ target }) => {
              setName(target.value);
            }}
            className="inputRegister"
            placeholder="Nombre Completo"
          />
          <label>Nombre de Usuario</label>
          <Input
            placeholder="Nombre de Usuario"
            prefix={<UserOutlined />}
            onChange={({ target }) => setUsername(target.value)}
            className="inputRegister"
          />
          <label> Email </label>
          <Input
            placeholder="Email"
            prefix={<MailOutlined />}
            onChange={({ target }) => setEmail(target.value)}
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
              setPassword(target.value);
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
            name="pass-register"
            onChange={({ target }) => {
              setPasswordVerification(target.value);
              checkPasswords();
            }}
            className="inputRegister"
          />
          {isCheckedPassword && isValidPassword && (
            <label className="error">Contraseñas no coinciden</label>
          )}
          {emailExists && (
            <label className="error">Email ya está registrado</label>
          )}
        </form>
        <Button
          type="primary"
          onClick={() => {
            <Redirect push to="/login" />;
          }}
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
          disabled={disabled}
          htmlType="submit"
          className="button-register"
          onClick={async () => registerUser()}
        >
          Registrate
        </Button>
      </div>
      <div className="rightside" />
    </div>
  );
};
export default Register;
