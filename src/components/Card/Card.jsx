import React, { useState } from "react";
import { Card, Typography } from "antd";

import "./Card.css";
import CardModalComponent from "../Modal/CardModal/CardModal";

const { Title } = Typography;

const CardComponent = ({ title, img, description, category, price, id }) => {
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
            <Title level={5}>{title}</Title>
            <span className="price">C${price}</span>
          </div>
        </div>
      </Card>
      <CardModalComponent
        visible={isModalVisible}
        title={title}
        price={price}
        description={description}
        img={img}
        category={category}
        cancel={handleCancel}
        ok={handleCancel}
        id={id}
      />
    </>
  );
};

export default React.memo(CardComponent);
