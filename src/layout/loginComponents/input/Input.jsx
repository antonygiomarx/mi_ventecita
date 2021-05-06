import React from "react";

const Input = (type, name, value, onChange, errorNombre) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={errorNombre ? "ErrorUsuario" : "input"}
    />
  );
};
export default Input;
