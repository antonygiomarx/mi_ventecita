import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";

import STORE_ACTIONS from "../../../redux/actions/store.action";
import store from "../../../store/main/store";

const AddProductModalComponent = () => {
  const [visible, setVisible] = useState(false);

  const { getState } = store;

  const toggleModal = () => {
    const { STORE_REDUCER } = getState();

    const { modalIsOpen } = STORE_REDUCER;

    setVisible(modalIsOpen);
  };

  store.subscribe(toggleModal);

  return (
    <Modal
      centered
      closable
      onCancel={() => {
        STORE_ACTIONS.TOGGLE_MODAL(false);
      }}
      visible={visible}
      title="Agregar producto"
    >
      <h1>prueba</h1>
    </Modal>
  );
};

export default AddProductModalComponent;
