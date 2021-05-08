import React from "react";
import { Container, Button } from "react-floating-action-button";

import AddProductModalComponent from "../modal/add-product/AddProductModal";

import "./FAB.css";
import store from "../../store/main/store";

const FloatingActionButtonComponent = () => {
  return (
    <>
      <Container className="fab-container">
        <Button
          tooltip="Agregar producto"
          className="fab-button"
          onClick={() => {
            store.dispatch({
              type: "TOGGLE_MODAL",
              value: true,
            });
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
