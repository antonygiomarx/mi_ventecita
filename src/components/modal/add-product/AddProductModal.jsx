import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import store from "../../../store/main/store";

const AddProductModalComponent = () => {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    const { modalIsOpen } = store.getState();
    setVisible(modalIsOpen);
  };

  store.subscribe(toggleModal);

  return (
    <Modal
      centered
      closable
      onCancel={() => {
        store.dispatch({
          type: "TOGGLE_MODAL",
          value: false,
        });
      }}
      visible={visible}
      title="Agregar producto"
    >
      <h1>prueba</h1>
    </Modal>
  );
};

export default AddProductModalComponent;
