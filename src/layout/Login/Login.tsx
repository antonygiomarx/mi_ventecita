import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import Registerbutton from "../../components/Registration/Registerbutton";

import "./Login.css";

export const Login = (): JSX.Element => {
  return (
    <Link to="/login">
      <div className="login">
        <div>
          <Logo />
          <LoginForm />
          <Registerbutton />
        </div>
        <div className="rightside" />
      </div>
    </Link>
  );
};
