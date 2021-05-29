import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Store.css";
import store from "../../store/main/store";
import CardComponent from "../card/Card";
import LoadingCard from "../card/Loading";
import FloatingActionButtonComponent from "../FloatingButton/FloatingActionButton";
import STORE_ACTIONS from "../../redux/actions/store.action";
import SearchbarComponent from "../searchbar/Searchbar";

const StoreComponent = () => {
  const { getState, subscribe } = store;
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const renderProducts = (productsToRender) => {
    STORE_ACTIONS.SET_PRODUCTS(productsToRender);
    const { STORE_REDUCER } = getState();
    const { products: stateProducts } = STORE_REDUCER;
    setProducts(stateProducts);
  };
  const { updatedProducts: a } = useSelector((state) => state.STORE_REDUCER);
  console.log(a);
  const renderUpdatedProducts = () => {
    const { STORE_REDUCER } = getState();
    const { products: stateProducts } = STORE_REDUCER;
    setProducts(stateProducts);
  };
  console.log(products);
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
  const onSearch = (word) => {
    // eslint-disable-next-line no-unused-vars
    const titles = products.filter(({ title }) => {
      return title.toLowerCase().includes(word.toLowerCase());
    });
    setSearchTitle(word);
    setSearchProducts(titles);
  };

  return (
    <>
      <SearchbarComponent
        searchableProduct={(e) => {
          onSearch(e.target.value);
        }}
      />
      <Content className="main-content">
        <div className="site-layout-background">
          <Row className="content-products">
            {!products.length && (
              <Col xs key={uuid()}>
                <LoadingCard />
              </Col>
            )}
            {searchTitle.length < 1
              ? products.map(
                  ({ id, title, price, category, image, description }) => (
                    <CardComponent
                      title={title}
                      img={image}
                      price={price}
                      category={category}
                      key={uuid()}
                      description={description}
                      id={id}
                    />
                  )
                )
              : searchProducts.map(
                  ({ id, title, price, category, image, description }) => (
                    <CardComponent
                      title={title}
                      img={image}
                      price={price}
                      category={category}
                      key={uuid()}
                      description={description}
                      id={id}
                    />
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
