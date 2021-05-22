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
    STORE_ACTIONS.UPDATE_PRODUCT(productUpdated);
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
                  console.log(newTitle);
                  setProductInfo({
                    ...productInfo,
                    title: newTitle,
                  });
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
                  updateProduct(productInfo);
                },
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

export default React.memo(CardModalComponent);
