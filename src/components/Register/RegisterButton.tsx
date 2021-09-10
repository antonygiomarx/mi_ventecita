import { Button } from "antd";
import { useHistory, Route } from "react-router-dom";
import { Register } from "./Register";

export const RegisterButton = (): JSX.Element => {
  const history = useHistory();
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
          <Route path="/register">
            <Register />
          </Route>;
          history.push("/register");
        }}
      >
        Regístrate
      </Button>
    </div>
  );
};
