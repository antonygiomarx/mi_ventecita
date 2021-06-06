import React, { useState } from "react";
import { Card, Modal, Typography, Select, message, Button } from "antd";


import "./CardModal.css";
import STORE_ACTIONS from "../../../redux/actions/store.action";
import { updateProductService } from "../../../services/product.service";
import config from "../../../config/config";
import SHOP_ACTIONS from "../../../redux/actions/shop.actions";

const { Title, Text } = Typography;

const CardModalComponent = ({
  id,
  name,
  img,
  category,
  visible,
  cancel,
  price,
  description,
  quantity,

  isShop,
}) => {
  const [productInfo, setProductInfo] = useState({
    id,
    name,
    price,
    description,
    category,
    quantity,
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
    <Modal
      destroyOnClose
      closeIcon
      closable
      centered
      visible={visible}
      onCancel={cancel}
      title={name}
      footer={
        !isShop
          ? null
          : [
              <Button
                key="add-to-cart"
                onClick={() => SHOP_ACTIONS.ADD_PRODUCT_TO_CART(productInfo)}
              >
                Agregar al carrito
              </Button>,
            ]
      }
      fo
    >
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
                  updateProduct({ ...productInfo, name: newTitle });
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
        <div className="card-header price">
          <Text
            level={5}
            editable={{
              onChange: (newqty) => {
                setProductInfo({
                  ...productInfo,
                  quantity: Number(newqty),
                });
                updateProduct({ ...productInfo, quantity: newqty });
              },
              tooltip: "Editar cantidad",
              autoSize: true,
            }}
          >
            {!productInfo.quantity ? 0 : productInfo.quantity}
          </Text>
        </div>
        <Select size="large" value={productInfo.category}>
          <Select.Option value="category">{productInfo.category}</Select.Option>
        </Select>
      </Card>
    </Modal>
  );
};

export default React.memo(CardModalComponent);
