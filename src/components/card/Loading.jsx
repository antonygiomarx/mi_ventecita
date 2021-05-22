import React from "react";
import { Card, Avatar } from "antd";
import CardComponent from "./Card";
// import store from "../../store/main/store";

const { Meta } = Card;

const LoadingCard = () => {
  /* const { getState } = store;
  const { STORE_REDUCER } = getState();
  const { products } = STORE_REDUCER;
  console.log(products); */
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
      <h1>todo</h1>
      <CardComponent />
    </>
  );
};
export default React.memo(LoadingCard);
