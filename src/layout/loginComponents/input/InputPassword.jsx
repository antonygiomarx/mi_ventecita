/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "./Input.css";

const InputPassword = (error) => {
  const [password, SetPassword] = useState("");
  const [passworderror, SetPassworderror] = useState(true);
  const [verificacion, SetVerificacion] = useState("");
  const [VerificacionError, SetVerificacionError] = useState(false);
  const [disable, Setdisable] = useState(false);

  useEffect(() => {
    if (password.length >= 6) {
      Setdisable(false);
      SetPassworderror(false);
    } else {
      Setdisable(true);
      SetPassworderror(true);
    }
  }, [password, verificacion]);
  const history = useHistory();
  const VerificacionPassword = () => {
    if (verificacion === password) {
      SetVerificacion(password);
      SetVerificacionError(false);
      Setdisable(false);
      history.push("/");
    } else {
      Setdisable(true);
      SetVerificacion("");
      SetVerificacionError(true);
    }
  };
  return (
    <div className="errorPassword">
      <label>Contraseña</label>
      <Input.Password
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        name="password"
        type="password"
        value={password}
        error={passworderror}
        onChange={(e) => SetPassword(e.target.value)}
        style={{ color: "black", padding: "15px" }}
        className={error ? "input" : "error"}
      />
      {passworderror && password.length > 0 && (
        <label className="error">Mínimo 6 caracteres</label>
      )}
      <br />
      <br />
      <label>Verificación Contraseña</label>
      <Input
        name="Verificacionpassword"
        type="password"
        value={verificacion}
        onChange={(e) => SetVerificacion(e.target.value)}
        className="inputPassword"
      />
      {VerificacionError && (
        <label className="error">Contraseñas no coinciden</label>
      )}
      <br />
      <br />
      <Button
        onClick={VerificacionPassword}
        type="primary"
        disabled={disable}
        className="button"
      >
        Registrate
      </Button>
    </div>
  );
};
export default InputPassword;
