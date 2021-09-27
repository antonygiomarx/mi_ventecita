import { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Modal, Typography, Select, Image, message } from "antd";
import { Button } from "antd/lib/radio";
import { useFirestore } from "reactfire";
import { doc, updateDoc } from "firebase/firestore";

import { Product } from "@models/product.model";
import { addProductToCart } from "@redux/actions/shop.actions";

const { Title, Text } = Typography;

interface CardModal extends Product {
  isShop?: boolean;
  visible?: boolean;
  cancel?: () => void;
}

export const CardModalComponent = ({
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
  visible,
  cancel,
}: CardModal): JSX.Element => {
  const [productInfo] = useState<Product>({
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

  const dispatch = useDispatch();
  const firestore = useFirestore();

  const productRef = doc(
    firestore,
    "Companies/Bq7agxz8zsxvF8YDcq2k/Products",
    id,
  );

  const updateProduct = async (product: Product) => {
    try {
      await updateDoc(productRef, {
        ...product,
      });
      message.success("Producto actualizado");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      message.error("Error al actualizar el producto");
      console.error(error.message);
    }
  };

  return (
    <Modal
      destroyOnClose
      visible={visible}
      onCancel={cancel}
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
                onClick={() => dispatch(addProductToCart(productInfo))}
              >
                Agregar al carrito
              </Button>,
            ]
      }
    >
      <Card
        bordered={false}
        cover={
          <Image
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
                onChange: (newName) => {
                  updateProduct({
                    ...productInfo,
                    name: newName,
                  });
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
