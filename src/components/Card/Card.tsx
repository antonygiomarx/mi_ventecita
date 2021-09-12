import { Typography, Card, Image } from "antd";
import { useState } from "react";

import { Product } from "../../models/product.model";
import { CardModalComponent } from "../Modal/CardModal/CardModal";

import "./Card.css";

const { Title } = Typography;

interface CardModel extends Product {
  isSelectable?: boolean;
}

export const CardComponent = ({
  name,
  imageUrl,
  description,
  category,
  price,
  id,
  isSelectable,
  quantity,
  companyId,
  provider,
}: CardModel): JSX.Element => {
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
          <Image
            preview={false}
            src={imageUrl}
            alt={name}
            className="card-image"
          />
        }
        style={{
          margin: "10px",
          padding: "10px",
          display: "grid",
          placeItems: "center",
          borderRadius: "30px",
          width: "270px",
          height: "400px",
        }}
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
        imageUrl={imageUrl}
        category={category}
        cancel={handleCancel}
        id={id}
        quantity={quantity}
        companyId={companyId}
        provider={provider}
      />
    </>
  );
};
