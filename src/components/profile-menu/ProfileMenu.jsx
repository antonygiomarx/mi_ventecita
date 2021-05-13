import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";

import "./ProfileMenu.css";
import AUTH_ACTIONS from "../../redux/actions/auth.actions";
import { FIREBASE_SERVICE } from "../../firebase/firebase";

const ProfileMenu = () => {
  const { ItemGroup, Item } = Menu;

  const [username, setUsername] = useState({});

  FIREBASE_SERVICE.AUTH.getAuth().onAuthStateChanged((user) => {
    if (!user) {
      AUTH_ACTIONS.LOGGED(false);
      console.log(`Sin usuario`);
    } else {
      setUsername(user);
      AUTH_ACTIONS.LOGGED(true);
      console.log(`Con usuario`);
    }
  });

  const menu = (
    <Menu>
      <ItemGroup
        title={`Hola ${username.displayName || "Guest"}`}
        className="menu-item"
      >
        <Item
          className="menu-item"
          onClick={() => {
            FIREBASE_SERVICE.AUTH.getAuth().signOut();
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
