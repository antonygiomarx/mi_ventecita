import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";
import "./Main.css";
import { v4 as uuid } from "uuid";
import Sidebar from "../sidebar/Sidebar";
import FooterComponent from "../footer/Footer";
import HeaderComponent from "../header/Header";
import StoreComponent from "../../components/store/Store";
import LoadingCard from "../../components/card/Loading";

const Main = () => {
  return (
    <Layout>
      <HeaderComponent />
      <Sidebar />
      <Layout className="site-layout">
        <Route key={uuid()} exact path="/store" component={StoreComponent} />
        <Route key={uuid()} exact path="/shop" component={LoadingCard} />
        <Route key={uuid()} exact path="/dashboard" component={LoadingCard} />
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default Main;
