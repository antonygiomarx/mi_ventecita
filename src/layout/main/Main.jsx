import React from "react";
// import { Route } from "react-router-dom";
import { Layout } from "antd";
// import { v4 as uuid } from "uuid";
import "./Main.css";
import SidebarComponent from "../sidebar/Sidebar";
import FooterComponent from "../footer/Footer";
import HeaderComponent from "../header/Header";
// import routes from "../../routes/default.routes";

const Main = ({ children }) => {
  return (
    <Layout>
      <HeaderComponent />
      <SidebarComponent />
      <Layout className="site-layout">
        {children}
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default Main;
