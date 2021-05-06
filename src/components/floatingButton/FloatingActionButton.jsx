import React from "react";
import { Container, Button } from "react-floating-action-button";

import "./FAB.css";

const FloatingActionButtonComponent = () => {
  return (
    <Container className="fab-container">
      <Button
        tooltip="Agregar producto"
        className="fab-button"
        onClick={() => console.log("clic")}
      >
        <span className="text-button">+</span>
      </Button>
    </Container>
  );
};

export default FloatingActionButtonComponent;
