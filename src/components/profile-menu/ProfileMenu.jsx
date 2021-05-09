import React from "react";
import { Dropdown, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";

import "./ProfileMenu.css";
import loginActions from "../../reducers/actions/login.actions";

const ProfileMenu = ({ username }) => {
  const { ItemGroup, Item } = Menu;
  const menu = (
    <Menu>
      <ItemGroup title={`Hola ${username || "Guest"}`} className="menu-item">
        <Item
          className="menu-item"
          onClick={() => {
            loginActions.SET_UNLOGGED();
          }}
        >
          Cerrar Sesión
        </Item>
      </ItemGroup>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Avatar icon={<UserOutlined />} className="avatar" size="large" />
    </Dropdown>
  );
};

export default ProfileMenu;
