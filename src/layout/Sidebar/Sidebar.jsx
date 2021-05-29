import React from "react";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import "./Sidebar.css";
import routes from "../../routes/default.routes";

const SidebarComponent = () => {
  return (
    <Sider className="sidebar" width="50" theme="dark">
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
        defaultSelectedKeys={["0"]}
      >
        {routes.map(({ icon, route, hidden }) => {
          return (
            <Menu.Item className="sidebar-item" key={uuid()} hidden={hidden}>
              {icon}
              <Link key={uuid()} to={`${route}`} />
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default SidebarComponent;