import React from "react";
import { Layout } from "antd";
import "./Main.css";
import FooterComponent from "../footer/Footer";
import HeaderComponent from "../header/Header";
import SidebarComponent from "../sidebar/Sidebar";

const Main = () => {
  return (
    <Layout>
      <HeaderComponent />
      <SidebarComponent />
      <Layout className="site-layout">
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default Main;
