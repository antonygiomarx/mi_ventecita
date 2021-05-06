import React, { useEffect, useState } from "react";
import { Col, Layout, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { v4 as uuid } from "uuid";

import "./Main.css";
import Sidebar from "../sidebar/Sidebar";
import FooterComponent from "../footer/Footer";
import CardComponent from "../../components/card/Card";
import LoadingCard from "../../components/card/Loading";
import Searchbar from "../../components/Searchbar/Searchbar";
import HeaderComponent from "../header/Header";
import store from "../../store/main/store";
import Login from "../../view/login/Login";

const Main = () => {
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
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/card">
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
                  <Row className="content-products">
                    {!products.length ? (
                      <Col className="gutter-row" span={6} key={uuid()}>
                        <LoadingCard />
                      </Col>
                    ) : (
                      products.map(
                        ({ title, price, category, description, image }) => {
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
                        }
                      )
                    )}
                  </Row>
                </div>
              </Content>
              <FooterComponent />
            </Layout>
          </Layout>
        </Route>
      </Switch>
      <Redirect from="/login" to="/card" />
    </Router>
  );
};

export default Main;
