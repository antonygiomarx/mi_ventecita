import { Typography, Card } from "antd";
import { memo, useState } from "react";

import { Product } from "../../models/product.model";
import CardModalComponent from "../Modal/CardModal/CardModal";

const { Title } = Typography;

interface CardModel extends Product {
  isSelectable?: boolean | undefined;
}

const CardComponent = ({
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
}: CardModel) => {
  console.log(isSelectable);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  console.log(isModalVisible, handleCancel);

  return (
    <>
      <Card
        onClick={showModal}
        className="card"
        cover={
          <img
            src={imageUrl}
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
        // visible={isModalVisible}
        name={name}
        price={price}
        description={description}
        imageUrl={imageUrl}
        category={category}
        // cancel={handleCancel}
        // ok={handleCancel}
        id={id}
        quantity={quantity}
        companyId={companyId}
        provider={provider}
      />
    </>
  );
};

export default memo(CardComponent);
