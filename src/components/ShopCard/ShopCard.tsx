/* eslint-disable no-unused-vars */
import { Card, Typography, Checkbox } from "antd";
import { useState } from "react";

import { Product } from "@models/product.model";
import { ShopModalComponent } from "@components/Modal/ShopModal/ShopModal";

const { Title } = Typography;

const ShopCard = ({
  name,
  imageUrl,
  description,
  category,
  price,
  id,
  companyId,
  provider,
  quantity,
}: Product): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const showModal = () => {
    setIsModalVisible(true);
  };

  console.log(showModal);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (e) => {
    setChecked(e.target.checked);
  };
  console.log(checked);
  const show = () => {
    if (!checked) console.log("check", name);
    else {
      console.log("no check");
    }
  };
  return (
    <>
      <Card
        onClick={handleCancel}
        className="card"
        cover={
          <img
            src={imageUrl}
            alt={name}
            style={{ maxWidth: "100%", maxHeight: "158px", width: "100%" }}
          />
        }
        extra={
          <Checkbox onChange={onChange} onClick={show}>
            Vender Producto
          </Checkbox>
        }
      >
        <div className="card-header">
          <div className="card-header title">
            <Title level={5}>{name}</Title>
            <span className="price">C${price}</span>
          </div>
        </div>
      </Card>
      <ShopModalComponent
        visible={isModalVisible}
        // cancel={handleCancel}
        name={name}
        imageUrl={imageUrl}
        description={description}
        category={category}
        price={price}
        id={id}
        companyId={companyId}
        provider={provider}
        quantity={quantity}
        cancel={console.log("cancel")}
      />
    </>
  );
};
export default ShopCard;
