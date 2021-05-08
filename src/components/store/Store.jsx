import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import store from "../../store/main/store";
import "./Store.css";
import CardComponent from "../card/Card";
import LoadingCard from "../card/Loading";
import FloatingActionButtonComponent from "../floating-button/FloatingActionButton";
import SearchbarComponent from "../searchbar/Searchbar";
import storeActions from "../../reducers/actions/store.action";

const StoreComponent = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${Math.random() * 100}`)
      .then((res) => res.json())
      .then((apiProducts) => {
        storeActions.SET_PRODUCTS(apiProducts);
        setProducts(store.getState().PRODUCTS);
      });
  }, []);

  const filterProducts = () => {};

  store.subscribe(filterProducts);

  return (
    <>
      <SearchbarComponent />
      <Content className="main-content">
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
            <FloatingActionButtonComponent />
          </Row>
        </div>
      </Content>
    </>
  );
};

export default StoreComponent;
