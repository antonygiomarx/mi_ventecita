import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const Registerbutton = () => {
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
        onClick={() => history.push("/register")}
      >
        Regístrate
      </Button>
    </div>
  );
};

export default Registerbutton;
