import React from "react";
import { Card, Modal, Select } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";

const ShopModalComponent = ({
  name,
  img,
  category,
  visible,
  cancel,
  price,
  description,
}) => {
  return (
    <Modal
      destroyOnClose
      closeIcon
      closable
      centered
      visible={visible}
      onCancel={cancel}
      onOk={cancel}
      title={name}
      footer={null}
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
            <Title level={3}>{name}</Title>
          </div>
          <div className="card-header price">
            <Text level={5}>C${price}</Text>
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
export default ShopModalComponent;
