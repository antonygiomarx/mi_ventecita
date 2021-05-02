import React, { useEffect, useState } from "react";
import { Col, Layout, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { v4 as uuid } from "uuid";

import "./Main.css";
import Sidebar from "../sidebar/Sidebar";
import FooterComponent from "../footer/Footer";
import CardComponent from "../../components/card/Card";
import LoadingCard from "../../components/card/Loading";
import Searchbar from "../../components/Searchbar/Searchbar";
import HeaderComponent from "../header/Header";

const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${Math.random() * 100}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <Layout>
      <HeaderComponent />
      <Sidebar />
      <Layout
        className="site-layout"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px 0",
        }}
      >
        <Searchbar />
        <Content style={{ margin: "10px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{
              margin: "0 0 0 50px",
              textAlign: "center",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "start",
            }}
          >
            <Row gutter={[24, 24]} justify="space-between">
              {!products.length ? (
                <Col className="gutter-row" span={6} key={uuid()}>
                  <LoadingCard />
                </Col>
              ) : (
                products.map(
                  ({ title, price, category, description, image }) => {
                    return (
                      <Col className="gutter-row" span={6} key={uuid()}>
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
                  }
                )
              )}
            </Row>
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default Main;
