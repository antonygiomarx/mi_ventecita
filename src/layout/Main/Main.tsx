import { useEffect, useState } from "react";
import * as React from "react";
import { Layout } from "antd";
import "./Main.css";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import LoadingCard from "../../components/Card/Loading";
import SidebarComponent from "../Sidebar/Sidebar";

const Main = ({ children }: React.PropsWithChildren<React.ReactNode>) => {
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
