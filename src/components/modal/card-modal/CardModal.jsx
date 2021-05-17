import "./CardModal.css";
import { Card, Modal, Typography, InputNumber } from "antd";
// import Paragraph from "antd/lib/skeleton/Paragraph";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";

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
            <InputNumber
              prefix={<UserOutlined />}
              defaultValue={price}
              className="price"
            />
          </div>
          <div>{description}</div>
        </div>
      </Card>
    </Modal>
  );
};

export default CardModalComponent;
