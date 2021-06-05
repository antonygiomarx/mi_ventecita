import { Row, Col } from "antd";
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";
import getProducts from "../../services/product.service";
import FloatingActionButtonComponent from "../FloatingButton/FloatingActionButton";
import LoadingCard from "../Card/Loading";
import ShopCard from "../ShopCard/ShopCard";
import SearchbarComponent from "../Searchbar/Searchbar";
import AddProductModalComponent from "../Modal/AddProduct/AddProductModal";

const ShopComponent = () => {
  const [products, setProducts] = useState([]);

  const [searchProducts, setSearchProducts] = useState([]);

  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const ac = new AbortController();
    try {
      (async () => {
        const { products: productsDb } = await getProducts();
        setProducts(productsDb);
      })();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }

    return () => {
      ac.abort();
    };
  }, []);
  const onSearch = (word) => {
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
                    <ShopCard
                      name={name}
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
                    <ShopCard
                      name={name}
                      img={imageUrl}
                      price={price}
                      category={category}
                      key={uuid()}
                      description={description}
                      id={id}
                    />
                  )
                )}
            <FloatingActionButtonComponent
              container={<AddProductModalComponent />}
              tooltip="Productos vendidos"
              textButton={<ShoppingCartOutlined />}
            />
          </Row>
        </div>
      </Content>
    </>
  );
};
export default ShopComponent;
