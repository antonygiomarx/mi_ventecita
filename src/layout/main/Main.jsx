import React from "react";
<<<<<<< HEAD
import { Route } from "react-router-dom";
import { Layout } from "antd";
=======
import { Layout } from "antd";

>>>>>>> 2686ce335644abf40173c69fc2b53e4577bffd9c
import "./Main.css";
import { v4 as uuid } from "uuid";
import Sidebar from "../sidebar/Sidebar";
import FooterComponent from "../footer/Footer";
import HeaderComponent from "../header/Header";
<<<<<<< HEAD
import StoreComponent from "../../components/store/Store";
import LoadingCard from "../../components/card/Loading";

const Main = () => {
=======

const Main = ({ children }) => {
>>>>>>> 2686ce335644abf40173c69fc2b53e4577bffd9c
  return (
    <Layout>
      <HeaderComponent />
      <Sidebar />
      <Layout className="site-layout">
<<<<<<< HEAD
        <Route key={uuid()} exact path="/store" component={StoreComponent} />
        <Route key={uuid()} exact path="/shop" component={LoadingCard} />
        <Route key={uuid()} exact path="/dashboard" component={LoadingCard} />
=======
        {children}
>>>>>>> 2686ce335644abf40173c69fc2b53e4577bffd9c
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default Main;
