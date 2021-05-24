import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

import "./Store.css";
import store from "../../store/main/store";
import CardComponent from "../Card/Card";
import LoadingCard from "../Card/Loading";
import FloatingActionButtonComponent from "../FloatingButton/FloatingActionButton";
import STORE_ACTIONS from "../../redux/actions/store.action";
import SearchbarComponent from "../Searchbar/Searchbar";

const StoreComponent = () => {
  const { getState, subscribe } = store;

  const [products, setProducts] = useState([]);

  const renderProducts = (productsToRender) => {
    STORE_ACTIONS.SET_PRODUCTS(productsToRender);
    const { STORE_REDUCER } = getState();
    const { products: stateProducts } = STORE_REDUCER;
    setProducts(stateProducts);
  };

  const renderUpdatedProducts = () => {
    const { STORE_REDUCER } = getState();
    const { products: stateProducts } = STORE_REDUCER;
    setProducts(stateProducts);
  };

  useEffect(() => {
    const ac = new AbortController();
    try {
      (async () => {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products?limit=${Math.random() * 100}`
        );
        renderProducts(data);
      })();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }

    return () => {
      ac.abort();
    };
  }, []);

  // const filterProducts = () => {};

  subscribe(renderUpdatedProducts);

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
              products.map(
                ({ id, title, price, category, image, description }) => {
                  return (
                    <Col xs key={uuid()}>
                      <CardComponent
                        title={title}
                        img={image}
                        price={price}
                        category={category}
                        key={uuid()}
                        description={description}
                        id={id}
                      />
                    </Col>
                  );
                }
              )
            )}
            <FloatingActionButtonComponent />
          </Row>
        </div>
      </Content>
    </>
  );
};

export default StoreComponent;
