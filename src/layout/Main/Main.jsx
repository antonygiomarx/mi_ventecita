import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "./Main.css";
import SidebarComponent from "../sidebar/Sidebar";
import HeaderComponent from "../header/Header";
import FooterComponent from "../footer/Footer";
import LoadingCard from "../../components/card/Loading";

const Main = ({ children }) => {
  const [component, setComponent] = useState(children);

  useEffect(() => {
    const ac = new AbortController();
    setComponent(children);
    return () => {
      ac.abort();
    };
  }, [children]);

  return (
    <Layout>
      <HeaderComponent />
      <SidebarComponent />
      <Layout className="site-layout">
        {!component ? <LoadingCard /> : component}
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default Main;
