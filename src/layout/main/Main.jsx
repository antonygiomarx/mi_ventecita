import React from "react";
import { Layout } from "antd";

import "./Main.css";
import Sidebar from "../sidebar/Sidebar";
import FooterComponent from "../footer/Footer";
import HeaderComponent from "../header/Header";
import SearchbarComponent from "../../components/Searchbar/Searchbar";

const Main = ({ children }) => {
  return (
    <Layout>
      <HeaderComponent />
      <Sidebar />
      <Layout className="site-layout">
        <SearchbarComponent />
        {children}
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default Main;
