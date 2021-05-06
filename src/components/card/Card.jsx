import React, { useState } from "react";
import { Card } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

import "./card.css";
import CardModalComponent from "../modal/card-modal/CardModal";

const CardComponent = ({ title, img, description, price, category }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Card
        onClick={showModal}
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
      <CardModalComponent
        visible={isModalVisible}
        title={title}
        description={description}
        img={img}
        price={price}
        category={category}
        cancel={handleCancel}
      />
    </>
  );
};

export default CardComponent;
