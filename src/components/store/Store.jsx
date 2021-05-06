import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import store from "../../store/main/store";

import "./Store.css";
import CardComponent from "../card/Card";
import LoadingCard from "../card/Loading";

const StoreComponent = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${Math.random() * 100}`)
      .then((res) => res.json())
      .then((apiProducts) => {
        store.dispatch({
          type: "SET_PRODUCTS",
          json: apiProducts,
        });
        setProducts(store.getState().PRODUCTS);
      });
  }, []);
  return (
    <Content style={{ margin: "10px 0", overflow: "initial" }}>
      <div className="site-layout-background">
        <Row className="content-products">
          {!products.length ? (
            <Col xs key={uuid()}>
              <LoadingCard />
            </Col>
          ) : (
            products.map(({ title, price, category, description, image }) => {
              return (
                <Col xs key={uuid()}>
                  <CardComponent
                    title={title}
                    description={description}
                    img={image}
                    price={price}
                    category={category}
                    key={uuid()}
                  />
                </Col>
              );
            })
          )}
        </Row>
      </div>
    </Content>
  );
};

export default StoreComponent;
