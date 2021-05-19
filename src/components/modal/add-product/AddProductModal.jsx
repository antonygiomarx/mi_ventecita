import { InboxOutlined } from "@ant-design/icons";
import { DatePicker, Form, Input, InputNumber, Select, Upload } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { FIREBASE_SERVICE } from "../../../firebase/firebase";

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

  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
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
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Imagen">
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger
              accept="image/png, image/jpeg, image/jpg"
              name="files"
              onChange={async (ev) => {
                await FIREBASE_SERVICE.STORAGE.uploadImage(ev.fileList[0]);
              }}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Haz click o arrastra la imagen hasta acá
              </p>
              <p className="ant-upload-hint">
                Solo imagenes en formato PNG/JPG.
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Nombre">
          <Input />
        </Form.Item>
        <Form.Item label="Categoría">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Precio">
          <InputNumber placeholder="C$" />
        </Form.Item>
        <Form.Item label="Vencimiento">
          <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProductModalComponent;
