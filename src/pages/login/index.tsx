import Logo from "../../components/Logo/Logo";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterButton } from "../../components/Register/RegisterButton";

const Login = (): JSX.Element => {
  return (
    <div className="login">
      <div>
        <Logo />
        <LoginForm />
        <RegisterButton />
      </div>
      <div className="rightside" />
    </div>
  );
};

export default Login;
