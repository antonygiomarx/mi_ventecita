import React from "react";
import { Card, Avatar } from "antd";

const { Meta } = Card;

const LoadingCard = () => {
  return (
    <>
      <Card style={{ width: 270, marginTop: 16 }} loading>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
    </>
  );
};
export default LoadingCard;
