import { Menu, Layout } from "antd";
import {
  DashboardTwoTone,
  ShoppingTwoTone,
  ShopTwoTone,
} from "@ant-design/icons";
import { nanoid as uuid } from "nanoid";
import { useRouter } from "next/router";

export const SidebarComponent = (): JSX.Element => {
  const { push } = useRouter();

  const { Sider } = Layout;

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
        <Menu.Item
          onClick={() => push("/dashboard")}
          key={uuid()}
          className="sidebar-item"
        >
          <DashboardTwoTone />
        </Menu.Item>

        <Menu.Item
          onClick={() => push("/shop")}
          key={uuid()}
          icon={<ShoppingTwoTone />}
          className="sidebar-item"
        />

        <Menu.Item
          onClick={() => push("/store")}
          key={uuid()}
          icon={<ShopTwoTone />}
          className="sidebar-item"
        />
      </Menu>
    </Sider>
  );
};
