import { Layout } from "antd";
import Head from "next/head";

import { LoginForm } from "@components/LoginForm/LoginForm";

const Login = (): JSX.Element => (
  <>
    <Head>
      <title>Inicio de sesión - Mi Ventecita</title>
    </Head>
    <Layout className="login">
      <Layout>
        <LoginForm />
      </Layout>
      <Layout className="rightside" />
    </Layout>
  </>
);

export default Login;
