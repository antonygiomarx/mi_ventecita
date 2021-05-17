import "./CardModal.css";
import { Card, Modal, Typography } from "antd";
// import Paragraph from "antd/lib/skeleton/Paragraph";
import React, { useState } from "react";

const { Title } = Typography;
const CardModalComponent = ({
  title,
  img,
  price,
  description,
  visible,
  cancel,
  ok,
}) => {
  const [editableText, setEditableText] = useState(title);
  const [editablePrice, setEditablePrice] = useState(price);
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
          <div>{description}</div>
        </div>
      </Card>
    </Modal>
  );
};

export default CardModalComponent;
