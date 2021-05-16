import { Card, Modal } from "antd";
// import Paragraph from "antd/lib/skeleton/Paragraph";
import React from "react";

import "./CardModal.css";

const CardModalComponent = ({
  title,
  img,
  price,
  description,
  visible,
  cancel,
}) => {
  return (
    <Modal centered visible={visible} onCancel={cancel}>
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
            <h3>{title}</h3>
            <span className="price">C${price}</span>
          </div>
          <div>{description}</div>
        </div>
      </Card>
    </Modal>
  );
};

export default CardModalComponent;
