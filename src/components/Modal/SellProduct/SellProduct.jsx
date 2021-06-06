import React, { useState } from "react";
import { Modal } from "antd";
import STORE_ACTIONS from "../../../redux/actions/store.action";
import store from "../../../store/main/store";

const SellProductModal = () => {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    const { getState } = store;
    const { STORE_REDUCER } = getState();

    const { modalIsOpen } = STORE_REDUCER;
    setVisible(modalIsOpen);
  };
  store.subscribe(toggleModal);
  return (
    <Modal
      visible={visible}
      closable
      onCancel={() => {
        STORE_ACTIONS.TOGGLE_MODAL(false);
      }}
    >
      <h1>todo</h1>
    </Modal>
  );
};
export default SellProductModal;
