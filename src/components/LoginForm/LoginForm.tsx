import { useRef } from "react";
import { Button, Checkbox, Input, Form } from "antd";

import "./LoginForm.css";
import { Auth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "reactfire";
import { useHistory } from "react-router-dom";

export interface EmailAndPasswordAuth {
  auth: Auth;
  email: string;
  password: string;
}

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
  const history = useHistory();

  const auth = useAuth();

  return (
    <Form className="form" name="login" autoComplete="on">
      <Form.Item
        label="Correo"
        name="email"
        rules={[
          {
            required: true,
            message: "Por favor ingrese su correo",
          },
        ]}
      >
        <Input ref={emailRef} placeholder="Correo" name="email" type="email" />
      </Form.Item>
      <Form.Item
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
          placeholder="Contraseña"
          name="contraseña"
          type="password"
          ref={passRef}
          onPressEnter={() => {
            (async () => {
              const logged = await signIn({
                auth,
                email: emailRef.current?.state?.value,
                password: passRef.current?.state?.value,
              });

              if (logged) {
                history.push("/");
              }
            })();
          }}
        />
      </Form.Item>

      <Checkbox>Recuerdame</Checkbox>

      <Button type="link" className="linkButton">
        ¿Olvidaste tu contraseña?
      </Button>

      <Button
        type="primary"
        className="button"
        onClick={() => {
          (async () => {
            const logged = await signIn({
              auth,
              email: emailRef.current?.state?.value,
              password: passRef.current?.state?.value,
            });

            if (logged) {
              history.push("/");
            }
          })();
        }}
      >
        Iniciar sesión
      </Button>
    </Form>
  );
};
