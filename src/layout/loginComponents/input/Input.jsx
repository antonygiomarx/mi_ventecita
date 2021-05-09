import React from "react";
import "./Input.css";
import AUTH_ACTIONS from "../../../redux/actions/auth.actions";

const Input = ({ type, name, value, errorNombre, isPassword }) => {
  return isPassword ? (
    <input
      type="password"
      name={name}
      value={value}
      onChange={(event) => {
        AUTH_ACTIONS.SET_PASSWORD(event.target.value);
      }}
      className={errorNombre ? "error" : "input"}
    />
  ) : (
    <input
      type={type}
      name={name}
      value={value}
      onChange={(event) => {
        AUTH_ACTIONS.SET_USER(event.target.value);
      }}
      className={errorNombre ? "error" : "input"}
    />
  );
};
export default Input;
