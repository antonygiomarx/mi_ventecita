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
    const ac = new AbortController();
    try {
      (async () => {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products?limit=${Math.random() * 100}`
        );

        STORE_ACTIONS.SET_PRODUCTS(data);

        const { STORE_REDUCER } = getState();
        const { products: stateProducts } = STORE_REDUCER;
        setProducts(stateProducts);
        // console.log(stateProducts);
      })();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }

    return () => {
      ac.abort();
    };
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
              products.map(({ title, price, category, image, description }) => {
                return (
                  <Col xs key={uuid()}>
                    <CardComponent
                      title={title}
                      img={image}
                      price={price}
                      category={category}
                      key={uuid()}
                      description={description}
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
