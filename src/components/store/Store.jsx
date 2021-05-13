import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

import "./Store.css";
import store from "../../store/main/store";
import CardComponent from "../card/Card";
import LoadingCard from "../card/Loading";
import FloatingActionButtonComponent from "../floating-button/FloatingActionButton";
import SearchbarComponent from "../searchbar/Searchbar";
import STORE_ACTIONS from "../../redux/actions/store.action";

const StoreComponent = () => {
  const { subscribe, getState } = store;

  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      (async () => {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products?limit=${Math.random() * 100}`
        );

        STORE_ACTIONS.SET_PRODUCTS(data);

        const { STORE_REDUCER } = getState();

        const { products: stateProducts } = STORE_REDUCER;

        setProducts(stateProducts);
      })();
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const filterProducts = () => {};

  subscribe(filterProducts);

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
