import React from "react";
import { Layout } from "antd";

import "./Main.css";
import Sidebar from "../sidebar/Sidebar";
import FooterComponent from "../footer/Footer";
import Searchbar from "../../components/searchbar/Searchbar";
import HeaderComponent from "../header/Header";

const Main = ({ children }) => {
  return (
    <Layout>
      <HeaderComponent />
      <Sidebar />
      <Layout className="site-layout">
        <Searchbar />
        {children}
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default Main;
