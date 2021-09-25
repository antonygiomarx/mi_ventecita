import { useRef } from "react";
import { Button, Checkbox, Input, Form } from "antd";
import { nanoid as uuid } from "nanoid";
import { Auth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "reactfire";
import { useRouter } from "next/router";

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
  const { push } = useRouter();

  const auth = useAuth();

  return (
    <Form key={uuid()} className="form" name="login" autoComplete="on">
      <Form.Item
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
      </Form.Item>
      <Form.Item
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
          onPressEnter={() => {
            (async () => {
              const logged = await signIn({
                auth,
                email: emailRef.current?.state?.value,
                password: passRef.current?.state?.value,
              });

              if (logged) {
                push("/");
              }
            })();
          }}
        />
      </Form.Item>

      <Checkbox key={uuid()}>Recuerdame</Checkbox>

      <Button key={uuid()} type="link" className="linkButton">
        ¿Olvidaste tu contraseña?
      </Button>

      <Button
        key={uuid()}
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
              push("/");
            }
          })();
        }}
      >
        Iniciar sesión
      </Button>
    </Form>
  );
};
