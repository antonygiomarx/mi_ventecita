import "./card.css";
import React, { useState } from "react";
import { Card, Typography } from "antd";
// import store from "../../store/main/store";
import CardModalComponent from "../modal/card-modal/CardModal";

const { Title } = Typography;

const CardComponent = ({ title, img, description, category, price }) => {
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
      />
    </>
  );
};

export default CardComponent;
