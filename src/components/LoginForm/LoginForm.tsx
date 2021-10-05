import { CSSProperties, useRef, useState } from "react";
import { Button, Checkbox, Input, Form, Typography, Layout, Card } from "antd";
import { nanoid as uuid } from "nanoid";
import { Auth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "reactfire";
import { useRouter } from "next/router";
import Logo from "@components/Logo/Logo";

export interface EmailAndPasswordAuth {
  auth: Auth;
  email: string;
  password: string;
}

const formStyles = {
  display: "grid",
  placeItems: "center",
} as CSSProperties;

const notRegisteredStyles = {
  flexDirection: "column",
  display: "grid",
  placeItems: "center",
} as CSSProperties;

const mainLayoutStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
} as CSSProperties;

const mainLayoutContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "600px",
} as CSSProperties;

const mainCardStyles = {
  borderRadius: "20px",
  width: "500px",
  height: "600px",
  display: "grid",
  placeItems: "center",
} as CSSProperties;

const logoCardStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "baseline",
  marginBottom: "10px",
} as CSSProperties;

const notRegisteredTextStyles = { marginBottom: "10px" } as CSSProperties;

const signIn = async ({ auth, email, password }: EmailAndPasswordAuth) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const LoginForm = (): JSX.Element => {
  const passRef = useRef<Input>(null);
  const emailRef = useRef<Input>(null);

  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);

  const { push } = useRouter();
  const { Item } = Form;
  const { Text, Title } = Typography;
  const { Content } = Layout;

  const auth = useAuth();

  const handleLogin = async () => {
    setLoginLoading(true);
    const logged = await signIn({
      auth,
      email: emailRef.current?.state?.value,
      password: passRef.current?.state?.value,
    });
    setLoginLoading(false);
    if (logged) {
      push("/");
    }
  };

  const handleNotRegisteredClick = () => {
    setRegisterLoading(true);
    push("/register");
    setRegisterLoading(false);
  };

  return (
    <Layout style={mainLayoutStyles}>
      <Card bordered style={mainCardStyles}>
        <Content style={logoCardStyles}>
          <Logo />
          <Title level={3}>Mi Ventecita</Title>
        </Content>
        <Content style={mainLayoutContent}>
          <Form style={formStyles} key={uuid()} name="login" autoComplete="on">
            <Item
              key={uuid()}
              label="Correo"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su correo",
                },
              ]}
            >
              <Input
                key={uuid()}
                ref={emailRef}
                placeholder="Correo"
                name="email"
                type="email"
              />
            </Item>
            <Item
              key={uuid()}
              label="Contraseña"
              name="contraseña"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su contraseña",
                },
              ]}
            >
              <Input.Password
                key={uuid()}
                placeholder="Contraseña"
                name="contraseña"
                type="password"
                ref={passRef}
                onPressEnter={handleLogin}
              />
            </Item>

            <Item>
              <Checkbox key={uuid()}>Recuerdame</Checkbox>
            </Item>
            <Item>
              <Button key={uuid()} type="link" className="linkButton">
                ¿Olvidaste tu contraseña?
              </Button>
            </Item>
            <Item>
              <Button
                loading={loginLoading}
                key={uuid()}
                type="primary"
                onClick={handleLogin}
              >
                Iniciar sesión
              </Button>
            </Item>
            <Item>
              <Content style={notRegisteredStyles}>
                <Text style={notRegisteredTextStyles}>
                  ¿Aún no te has registrado?
                </Text>
                <Button
                  onClick={handleNotRegisteredClick}
                  type="ghost"
                  key={uuid()}
                  loading={registerLoading}
                >
                  Registrate
                </Button>
              </Content>
            </Item>
          </Form>
        </Content>
      </Card>
    </Layout>
  );
};
