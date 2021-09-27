import { Card, Modal, Select } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import Image from "next/image";

import { Product } from "@models/product.model";

interface ShopModal extends Product {
  visible: boolean;
  cancel: void;
}

export const ShopModalComponent = ({
  name,
  imageUrl,
  category,
  visible,
  cancel,
  price,
  description,
}: ShopModal): JSX.Element => {
  console.log(cancel);

  return (
    <Modal
      destroyOnClose
      closeIcon
      closable
      centered
      visible={visible}
      // onCancel={cancel}
      // onOk={cancel}
      title={name}
      footer={null}
    >
      <Card bordered={false} cover={<Image src={imageUrl} alt={name} />}>
        <div className="card-header">
          <div className="card-header title">
            <Title level={3}>{name}</Title>
          </div>
          <div className="card-header price">
            <Text>C${price}</Text>
          </div>
        </div>
        <div className="card-body">
          <Text className="card-body description">{description}</Text>
        </div>
        <Select size="large" value={category}>
          <Select.Option value="category">{category}</Select.Option>
        </Select>
      </Card>
    </Modal>
  );
};
