import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "./Main.css";
import SidebarComponent from "../Sidebar/Sidebar";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import LoadingCard from "../../components/Card/Loading";

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
