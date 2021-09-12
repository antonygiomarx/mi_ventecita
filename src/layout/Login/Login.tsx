import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterButton } from "../../components/Register/RegisterButton";

import "./Login.css";

export const Login = (): JSX.Element => {
  return (
    <Link to="/login">
      <div className="login">
        <div>
          <Logo />
          <LoginForm />
          <RegisterButton />
        </div>
        <div className="rightside" />
      </div>
    </Link>
  );
};
