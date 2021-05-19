import "./CardModal.css";
import React, { useState } from "react";
import { Card, Modal, Typography, Select } from "antd";
import STORE_ACTIONS from "../../../redux/actions/store.action";
// import store from "../../../store/main/store";
// import Paragraph from "antd/lib/skeleton/Paragraph";

const { Title, Text } = Typography;
const CardModalComponent = ({
  title,
  img,
  category,
  visible,
  cancel,
  ok,
  price,
  description,
}) => {
  const [editableText, setEditableText] = useState(title);
  const [editablePrice, setEditablePrice] = useState(price);
  const [editableDescription, setEditableDescription] = useState(description);
  const editable = [
    {
      title: editableText,
      precio: editablePrice,
      description: editableDescription,
      category: { category },
    },
  ];
  STORE_ACTIONS.UPDATED_PRODUCTS(editable);

  return (
    <Modal centered visible={visible} onCancel={cancel} onOk={ok}>
      <Card
        bordered={false}
        cover={
          <img
            src={img}
            alt={title}
            style={{
              width: "30%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        }
      >
        <div className="card-header">
          <div className="card-header title">
            <Title level={3} editable={{ onChange: setEditableText }}>
              {editableText}
            </Title>
            <Title level={5} editable={{ onChange: setEditablePrice }}>
              {editablePrice}
            </Title>
          </div>
          <Text editable={{ onChange: setEditableDescription }}>
            {editableDescription}
          </Text>
          <Select size="large">
            <Select.Option value="category">{category}</Select.Option>
          </Select>
        </div>
      </Card>
    </Modal>
  );
};

export default CardModalComponent;
