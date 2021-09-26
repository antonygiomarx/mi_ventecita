import { useRef } from "react";
import { useRouter } from "next/router";
import { Button, Input, Form } from "antd";
import { MailOutlined, UserOutlined, TeamOutlined } from "@ant-design/icons";
import { nanoid as uuid } from "nanoid";
import { useAuth } from "reactfire";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { EmailAndPasswordAuth } from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo/Logo";

const registerUser = async ({
  auth,
  email,
  password,
}: EmailAndPasswordAuth) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error.message);
    if (error.message === "Firebase: Error (auth/email-already-in-use).") {
      console.error("Correo ya existe");
    }
  }
};

const Register = (): JSX.Element => {
  const nameRef = useRef(null);

  const usernameRef = useRef(null);

  const passwordRef = useRef(null);

  const emailRef = useRef(null);

  const passwordVerificationRef = useRef(null);

  const auth = useAuth();

  const { push } = useRouter();

  const { Item } = Form;

  return (
    <div className="login">
      <div>
        <Logo />
        <Form className="form-register">
          <Item key={uuid()} name="Nombre completo" htmlFor="input-name">
            <Input
              key={uuid()}
              id="input-name"
              prefix={<TeamOutlined />}
              ref={nameRef}
              className="inputRegister"
              placeholder="Nombre Completo"
            />
          </Item>
          <Item key={uuid()} name="Nombre de Usuario">
            <Input
              key={uuid()}
              placeholder="Nombre de Usuario"
              prefix={<UserOutlined />}
              className="inputRegister"
              ref={usernameRef}
            />
          </Item>
          <Item key={uuid()} name="Email">
            <Input
              key={uuid()}
              placeholder="Email"
              prefix={<MailOutlined />}
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              className="inputRegister"
            />
          </Item>

          <Item key={uuid()} name="Contraseña">
            <Input.Password
              key={uuid()}
              placeholder="Contraseña"
              type="password"
              id="pass-register"
              name="pass-register"
              ref={passwordRef}
              className="inputRegister"
            />
          </Item>
          <Item key={uuid()} name="Verificación Contraseña">
            <Input
              key={uuid()}
              placeholder="Ingrese nuevamente la contraseña"
              type="password"
              name="pass-register"
              ref={passwordVerificationRef}
              className="inputRegister"
            />
          </Item>
        </Form>
        <Button
          key={uuid()}
          type="primary"
          onClick={() => {
            push("/login");
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
          key={uuid()}
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

export default Register;
