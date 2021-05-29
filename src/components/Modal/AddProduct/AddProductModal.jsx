import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Upload,
} from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
// import { FIREBASE_SERVICE } from "../../../firebase/firebase";

import getBase64 from "../../../utils/utils";
import STORE_ACTIONS from "../../../redux/actions/store.action";
import store from "../../../store/main/store";
import { FIREBASE_SERVICE } from "../../../firebase/firebase";

const AddProductModalComponent = () => {
  const [visible, setVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  console.log(loading);
  const [image, setImage] = useState({
    url: "",
  });

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

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(
        info.file.originFileObj,
        (url) =>
          setImage({
            url,
          }),

        setLoading(false)
      );
    }
  };

  const upload = async (imageToUpload) => {
    const imageRef = FIREBASE_SERVICE.STORAGE().ref(
      `demo/${imageToUpload.file.name}`
    );

    const bucketImage = await imageRef.put(await imageToUpload.file, {
      contentType: imageToUpload.file.type,
    });

    if (bucketImage.state !== "success") {
      console.log("Error subiendo imagen");
    } else {
      setImage({
        ...image,
        url: await imageRef.getDownloadURL(bucketImage),
      });
      setLoading(false);
    }
  };

  // const onRemove = (file) => {
  //   const { value, onChange } = this.props;

  //   const files = value.filter((v) => v.url !== file.url);

  //   if (onChange) {
  //     onChange(files);
  //   }
  // };
  // const uploadImage = (file) => {

  // };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            beforeUpload={beforeUpload}
            onChange={handleChange}
            customRequest={async (imageToUpload) => {
              await upload(imageToUpload);
            }}
            accept="image/*"
            maxCount={1}
          >
            {image.url ? (
              <img src={image.url} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
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
