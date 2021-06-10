import { memo, useState } from "react";
import { Card, Modal, Typography, Select, message } from "antd";
import { Button } from "antd/lib/radio";

import "./CardModal.css";
import { Product } from "../../../models/product.model";
import STORE_ACTIONS from "../../../redux/actions/store.action";
import { ProductService } from "../../../services/product.service";
import SHOP_ACTIONS from "../../../redux/actions/shop.actions";

const { Title, Text } = Typography;

interface CardModal extends Product {
  isShop: boolean | undefined;
}

const CardModalComponent = ({
  id,
  name,
  imageUrl,
  category,
  price,
  description,
  isShop,
  quantity,
  companyId,
  provider,
}: CardModal) => {
  const [productInfo, setProductInfo] = useState<Product>({
    id,
    name,
    price,
    description,
    category,
    companyId,
    quantity,
    imageUrl,
    provider,
  });

  const updateProduct = async (productUpdated: Product) => {
    const productService = new ProductService(productInfo);
    const isUpdated = await productService.update();
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
    >
      <Card
        bordered={false}
        cover={
          <img
            src={imageUrl}
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
              editable={{
                onChange: (newPrice) => {
                  setProductInfo({
                    ...productInfo,
                    price: newPrice,
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
        <Select size="large" value={productInfo.category}>
          <Select.Option value="category">{productInfo.category}</Select.Option>
        </Select>
      </Card>
    </Modal>
  );
};

export default memo(CardModalComponent);
