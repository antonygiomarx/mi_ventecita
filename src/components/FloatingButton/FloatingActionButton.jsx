import React from "react";
import { Container, Button } from "react-floating-action-button";
import STORE_ACTIONS from "../../redux/actions/store.action";
import AddProductModalComponent from "../Modal/AddProduct/AddProductModal";

import "./FAB.css";
// import AddProductModalComponent from "../Modal/AddProduct/AddProductModal";

const FloatingActionButtonComponent = ({ tooltip }) => {
  return (
    <>
      <Container className="fab-container">
        <Button
          tooltip={tooltip}
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
