import React from "react";
import { Layout } from "antd";
import { v4 as uuid } from "uuid";

import "./Main.css";
import { Route } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import FooterComponent from "../footer/Footer";
import Searchbar from "../../components/searchbar/Searchbar";
import HeaderComponent from "../header/Header";
import routes from "../../routes/default.routes";

const Main = () => {
  return (
    <Layout>
      <HeaderComponent />
      <Sidebar />
      <Layout className="site-layout">
        <Searchbar />
        {routes.map(({ route, component }) => {
          return (
            <Route exact path={`${route}`} component={component} key={uuid()} />
          );
        })}
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default Main;
