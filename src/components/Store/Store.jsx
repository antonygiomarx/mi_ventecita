import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
import "./Store.css";
import store from "../../store/main/store";
import CardComponent from "../Card/Card";
import LoadingCard from "../Card/Loading";
import FloatingActionButtonComponent from "../FloatingButton/FloatingActionButton";
import STORE_ACTIONS from "../../redux/actions/store.action";
import SearchbarComponent from "../Searchbar/Searchbar";
import getProducts from "../../services/product.service";

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
    console.log(stateProducts);
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
        const { products: productsDb } = await getProducts();
        console.log(productsDb);
        renderProducts(productsDb);
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
    const titles = products.filter(({ name: product }) => {
      return product.toLowerCase().includes(word.toLowerCase());
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
                  ({ id, name, price, category, imageUrl, description }) => (
                    <CardComponent
                      title={name}
                      img={imageUrl}
                      price={price}
                      category={category}
                      key={uuid()}
                      description={description}
                      id={id}
                    />
                  )
                )
              : searchProducts.map(
                  ({ id, name, price, category, imageUrl, description }) => (
                    <CardComponent
                      title={name}
                      img={imageUrl}
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
