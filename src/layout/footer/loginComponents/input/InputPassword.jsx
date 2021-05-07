/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

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
      history.push("/card");
    } else {
      Setdisable(true);
      SetVerificacion("");
      SetVerificacionError(true);
    }
  };
  return (
    <div className="errorPassword">
      <label className="input">Contraseña</label>
      <input
        name="password"
        type="password"
        value={password}
        error={passworderror}
        onChange={(e) => SetPassword(e.target.value)}
        style={{ color: "black", padding: "15px" }}
        className={error ? "Error" : "input"}
      />
      {passworderror && <label className="Error">Mínimo 6 caracteres</label>}
      <br />
      <br />
      <label className="input">Verificación Contraseña</label>
      <input
        name="Verificacionpassword"
        type="password"
        value={verificacion}
        onChange={(e) => SetVerificacion(e.target.value)}
      />
      {VerificacionError && (
        <label className="Error">Contraseñas no coinciden</label>
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
