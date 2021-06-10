/* eslint-disable @typescript-eslint/no-var-requires */
import STORE_ACTIONS from "../../redux/actions/store.action";

import "./FAB.css";

import AddProductModalComponent from "../Modal/AddProduct/AddProductModal";

const { Container, Button } = require("react-floating-action-button");

const FloatingActionButtonComponent = () => {
  return (
    <>
      <Container className="fab-container">
        <Button
          tooltip="Agregar producto"
          className="fab-button"
          onClick={() => {
            STORE_ACTIONS.TOGGLE_MODAL(true);
          }}
        >
          <span className="text-button">+</span>
        </Button>
      </Container>
      <AddProductModalComponent />
    </>
  );
};

export default FloatingActionButtonComponent;
