/* eslint-disable @typescript-eslint/no-var-requires */

import "./FAB.css";

import { AddProductModalComponent } from "../Modal/AddProduct/AddProductModal";

const { Container, Button } = require("react-floating-action-button");

export const FloatingActionButtonComponent = (): JSX.Element => {
  return (
    <>
      <Container className="fab-container">
        <Button
          tooltip="Agregar producto"
          className="fab-button"
          onClick={() => {
            console.log("prueba");
          }}
        >
          <span className="text-button">+</span>
        </Button>
      </Container>
      <AddProductModalComponent />
    </>
  );
};
