import { useState } from "react";
import { Dropdown, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";

import { useLogout } from "../../hooks/useLogout";

import { User } from "../../models/user.model";

export const ProfileMenu = (): JSX.Element => {
  const [username] = useState<User>();
  const logout = useLogout();

  const { ItemGroup, Item } = Menu;

  const menu = (
    <Menu>
      <ItemGroup
        title={`Hola ${username?.displayName || "Guest"}`}
        className="menu-item"
      >
        <Item className="menu-item" onClick={logout}>
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
