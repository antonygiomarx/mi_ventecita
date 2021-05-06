import { Card, Modal } from "antd";
import Paragraph from "antd/lib/skeleton/Paragraph";
import React from "react";

import "./CardModal.css";

const CardModalComponent = ({
  title,
  img,
  description,
  price,
  category,
  visible,
  cancel,
}) => {
  return (
    <Modal visible={visible} onCancel={cancel}>
      <Card
        hoverable
        className="card"
        cover={
          <img
            src={img}
            alt={title}
            style={{ maxWidth: "100%", maxHeight: "158px", width: "100%" }}
          />
        }
      >
        <div className="card-header">
          <div className="card-header title">
            <h1>{title}</h1>
            <span
              style={{
                display: "flex",
                alignItems: "flex-end",
                margin: "0 0 0 150px",
                fontWeight: "bold",
              }}
            >
              C${price}
            </span>
          </div>

          <Paragraph
            ellipsis={
              description
                ? {
                    rows: 2,
                    expandable: true,
                    symbol: "Ver más",
                  }
                : false
            }
          >
            {description}
          </Paragraph>

          <p>{category}</p>
        </div>
      </Card>
    </Modal>
  );
};

export default CardModalComponent;
