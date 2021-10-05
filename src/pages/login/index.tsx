import { Button } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";

import { LoginForm } from "@components/LoginForm/LoginForm";
import Logo from "@components/Logo/Logo";

const RegisterButton = (): JSX.Element => {
  const { push } = useRouter();
  return (
    <div>
      <h4 style={{ fontWeight: "bold", marginTop: "-15px" }}>
        ¿Aún no te has registrado?
      </h4>
      <Button
        type="default"
        className="button"
        style={{ width: "50%", left: "25%", textAlign: "center" }}
        onClick={() => {
          push("/register");
        }}
      >
        Regístrate
      </Button>
    </div>
  );
};

const Login = (): JSX.Element => (
  <>
    <Head>
      <title>Inicio de sesión - Mi Ventecita</title>
    </Head>
    <div className="login">
      <div>
        <Logo />
        <LoginForm />
        <RegisterButton />
      </div>
      <div className="rightside" />
    </div>
  </>
);

export default Login;
