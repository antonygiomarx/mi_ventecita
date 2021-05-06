/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { Button, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import "../../../view/login/Login.css";
import Input from "../input/Input";

const Form = () => {
  const history = useHistory();
  return (
    <form className="form">
      <label>Nombre de Usuario</label>
      <Input name="usuario" type="text" />

      <label>Email</label>
      <Input name="correo" type="email" />
      <label>Contraseña</label>
      <Input name="contraseña" type="password" />
      <Checkbox> Recuerdame</Checkbox>
      <Button type="link" className="linkButton">
        ¿Olvidaste tu contraseña?
      </Button>
      <Button
        type="primary"
        className="button"
        onClick={() => history.push("/card")}
      >
        Iniciar sesión
      </Button>
    </form>
  );
};

export default Form;
