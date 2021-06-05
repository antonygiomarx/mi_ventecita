import React, { useState } from "react";
import { Card, Typography } from "antd";

import "./Card.css";
import CardModalComponent from "../Modal/CardModal/CardModal";

const { Title } = Typography;

const CardComponent = ({
  name,
  img,
  description,
  category,
  price,
  id,
  isSelectable,
}) => {
  console.log(isSelectable);
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
        se
        cover={
          <img
            src={img}
            alt={name}
            style={{ maxWidth: "100%", maxHeight: "158px", width: "100%" }}
          />
        }
      >
        <div className="card-header">
          <div className="card-header title">
            <Title level={5}>{name}</Title>
            <span className="price">C${price}</span>
          </div>
        </div>
      </Card>
      <CardModalComponent
        isShop={isSelectable}
        visible={isModalVisible}
        name={name}
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
