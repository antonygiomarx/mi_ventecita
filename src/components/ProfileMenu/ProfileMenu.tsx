import { useState } from "react";
import { Dropdown, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";

import "./ProfileMenu.css";
import AUTH_ACTIONS from "../../redux/actions/auth.actions";
import { FirebaseService } from "../../firebase/firebase";
import { setSessionToLocalStorage } from "../../utils/utils";

const ProfileMenu = () => {
  const { ItemGroup, Item } = Menu;

  const [username, setUsername] = useState({});

  FirebaseService.getAuth()().onAuthStateChanged((user) => {
    if (!user) {
      AUTH_ACTIONS.LOGGED(false);
    } else {
      setUsername(user);
      AUTH_ACTIONS.LOGGED(true);
    }
  });

  const menu = (
    <Menu>
      <ItemGroup title={`Hola ${username || "Guest"}`} className="menu-item">
        <Item
          className="menu-item"
          onClick={() => {
            FirebaseService.getAuth()().signOut();
            setSessionToLocalStorage("false");
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
