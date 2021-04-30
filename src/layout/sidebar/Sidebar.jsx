import React from "react";
import { ShoppingTwoTone, ShopTwoTone } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";

const SidebarComponent = () => {
  return (
    <Sider
      width="50"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 61,
      }}
    >
      <Menu
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["0"]}
      >
        <Menu.Item
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
          key="1"
          icon={<ShoppingTwoTone />}
        />
        <Menu.Item
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
          key="2"
          icon={<ShopTwoTone />}
        />
      </Menu>
    </Sider>
  );
};

export default SidebarComponent;
