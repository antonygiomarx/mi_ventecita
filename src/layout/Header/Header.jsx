import React from "react";
import { Header } from "antd/lib/layout/layout";

import "./Header.css";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

const HeaderComponent = () => {
  return (
    <Header theme="ligth" className="header">
      <div className="logo" />
      <ProfileMenu />
    </Header>
  );
};

export default HeaderComponent;
