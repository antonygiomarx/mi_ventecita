import React, { useState } from "react";
import { Card, Modal, Typography, Select } from "antd";

import "./CardModal.css";
import STORE_ACTIONS from "../../../redux/actions/store.action";

const { Title, Text } = Typography;
const CardModalComponent = ({
  id,
  title,
  img,
  category,
  visible,
  cancel,
  ok,
  price,
  description,
}) => {
  const [productInfo, setProductInfo] = useState({
    id,
    title,
    price,
    description,
    category,
  });

  const updateProduct = (productUpdated) => {
    console.log("product updated", productUpdated);
    setTimeout(() => {
      STORE_ACTIONS.UPDATE_PRODUCT({
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
      });
    }, 1000);
  };

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
            <Title
              level={3}
              editable={{
                onChange: (newTitle) => {
                  setProductInfo({
                    ...productInfo,
                    title: newTitle,
                  });
                },
                onEnd: () => {
                  updateProduct(productInfo);
                },
              }}
            >
              {productInfo.title}
            </Title>
            <Title
              level={5}
              editable={{
                onChange: (newPrice) => {
                  console.log("new Price", newPrice);
                  setProductInfo({
                    ...productInfo,
                    price: Number(newPrice),
                  });
                },
                onEnd: () => {
                  updateProduct(productInfo);
                },
                tooltip: "Editar precio",
              }}
            >
              {productInfo.price}
            </Title>
          </div>
          <Text
            editable={{
              onChange: (newDescription) => {
                setProductInfo({
                  ...productInfo,
                  description: newDescription,
                });
                updateProduct(productInfo);
              },
            }}
          >
            {productInfo.description}
          </Text>
          <Select size="large">
            <Select.Option value="category">
              {productInfo.category}
            </Select.Option>
          </Select>
        </div>
      </Card>
    </Modal>
  );
};

export default CardModalComponent;
