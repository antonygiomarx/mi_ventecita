import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import {
  DashboardTwoTone,
  ShoppingTwoTone,
  ShopTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./Sidebar.css";

export const SidebarComponent = (): JSX.Element => {
  return (
    <Sider
      style={{
        height: "100vh",
        position: "fixed",
        display: "grid",
        placeItems: "center",
      }}
      className="sidebar"
      width="65"
      theme="dark"
    >
      <Menu
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          top: "61px",
        }}
        theme="dark"
        mode="inline"
      >
        <Menu.Item icon={<DashboardTwoTone />} className="sidebar-item">
          <Link to="/dashboard" />
        </Menu.Item>
        <Menu.Item icon={<ShoppingTwoTone />} className="sidebar-item">
          <Link to="/shop" />
        </Menu.Item>
        <Menu.Item icon={<ShopTwoTone />} className="sidebar-item">
          <Link to="/store" />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
