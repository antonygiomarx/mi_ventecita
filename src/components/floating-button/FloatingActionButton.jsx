import React from "react";
import { Container, Button } from "react-floating-action-button";
import STORE_ACTIONS from "../../redux/actions/store.action";

import AddProductModalComponent from "../modal/add-product/AddProductModal";

import "./FAB.css";

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
