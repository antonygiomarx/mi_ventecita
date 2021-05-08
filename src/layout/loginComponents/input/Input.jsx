import React from "react";
import "./Input.css";
import store from "../../../store/main/store";

const Input = ({ type, name, value, errorNombre, isPassword }) => {
  return isPassword ? (
    <input
      type="password"
      name={name}
      value={value}
      onChange={(event) => {
        store.dispatch({
          type: "INPUT_PASSWORD",
          pass: event.target.value,
        });
      }}
      className={errorNombre ? "error" : "input"}
    />
  ) : (
    <input
      type={type}
      name={name}
      value={value}
      onChange={(event) => {
        store.dispatch({
          type: "INPUT_USER",
          user: event.target.value,
        });
      }}
      className={errorNombre ? "error" : "input"}
    />
  );
};
export default Input;
