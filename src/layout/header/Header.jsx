import React from "react";
import { Header } from "antd/lib/layout/layout";

const HeaderComponent = () => {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
    </Header>
  );
};

export default HeaderComponent;
