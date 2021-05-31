import React, { useState } from "react";
import { Card, Modal, Typography, Select, message } from "antd";

import "./CardModal.css";
import STORE_ACTIONS from "../../../redux/actions/store.action";
import { updateProductService } from "../../../services/product.service";
import config from "../../../config/config";

const { Title, Text } = Typography;

const CardModalComponent = ({
  id,
  name,
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
    name,
    price,
    description,
    category,
    companyId: config.companyId,
  });

  const updateProduct = async (productUpdated) => {
    const isUpdated = await updateProductService(productUpdated);
    if (!isUpdated.success) {
      message.error("Error al actualizar el producto");
    } else {
      STORE_ACTIONS.UPDATE_PRODUCT(productUpdated);
      message.success("Producto actualizado");
    }
  };

  return (
    <Modal centered visible={visible} onCancel={cancel} onOk={ok}>
      <Card
        bordered={false}
        cover={
          <img
            src={img}
            alt={name}
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
                    name: newTitle,
                  });
                  updateProduct({ ...productInfo, title: newTitle });
                },
                tooltip: "Editar titulo",
              }}
            >
              {productInfo.name}
            </Title>
          </div>
          <div className="card-header price">
            <Text
              level={5}
              editable={{
                onChange: (newPrice) => {
                  setProductInfo({
                    ...productInfo,
                    price: Number(newPrice),
                  });
                  updateProduct({ ...productInfo, price: newPrice });
                },
                tooltip: "Editar precio",
                autoSize: true,
              }}
            >
              C${productInfo.price}
            </Text>
          </div>
        </div>
        <div className="card-body">
          <Text
            className="card-body description"
            editable={{
              onChange: (newDescription) => {
                setProductInfo({
                  ...productInfo,
                  description: newDescription,
                });
                updateProduct({ ...productInfo, description: newDescription });
              },
              tooltip: "Editar descripción",
              autoSize: true,
            }}
          >
            {productInfo.description}
          </Text>
        </div>
        <Select size="large">
          <Select.Option value="category">{productInfo.category}</Select.Option>
        </Select>
      </Card>
    </Modal>
  );
};

export default React.memo(CardModalComponent);
