/* eslint-disable jsx-a11y/label-has-associated-control */
import "./Register.css";
import { useRef } from "react";
import { Redirect } from "react-router-dom";
import { Button, Input } from "antd";
import { MailOutlined, UserOutlined, TeamOutlined } from "@ant-design/icons";

import { useAuth } from "reactfire";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Logo from "../Logo/Logo";
import { EmailAndPasswordAuth } from "../LoginForm/LoginForm";

const registerUser = async ({
  auth,
  email,
  password,
}: EmailAndPasswordAuth) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    console.log(userCredential);
  } catch (error) {
    console.log(error.message);
    if (error.message === "Firebase: Error (auth/email-already-in-use).") {
      console.error("Correo ya existe");
    }
  }
};

export const Register = (): JSX.Element => {
  const nameRef = useRef(null);

  const usernameRef = useRef(null);

  const passwordRef = useRef(null);

  const emailRef = useRef(null);

  const passwordVerificationRef = useRef(null);

  const auth = useAuth();
  console.log("Prueba");

  return (
    <div className="login">
      <div>
        <Logo />
        <form className="form-register">
          <label htmlFor="input-name">Nombre completo</label>
          <Input
            id="input-name"
            prefix={<TeamOutlined />}
            ref={nameRef}
            className="inputRegister"
            placeholder="Nombre Completo"
          />
          <label>Nombre de Usuario</label>
          <Input
            placeholder="Nombre de Usuario"
            prefix={<UserOutlined />}
            className="inputRegister"
            ref={usernameRef}
          />
          <label> Email </label>
          <Input
            placeholder="Email"
            prefix={<MailOutlined />}
            ref={emailRef}
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
            ref={passwordRef}
            className="inputRegister"
          />

          <br />
          <label> Verificación Contraseña</label>
          <Input
            placeholder="Ingrese nuevamente la contraseña"
            type="password"
            name="pass-register"
            ref={passwordVerificationRef}
            className="inputRegister"
          />
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
          htmlType="submit"
          className="button-register"
          onClick={async () => {
            await registerUser({
              auth,
              email: emailRef.current,
              password: passwordRef.current,
            });
          }}
        >
          Registrate
        </Button>
      </div>
      <div className="rightside" />
    </div>
  );
};
