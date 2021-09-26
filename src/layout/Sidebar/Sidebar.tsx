import { Menu, Layout } from "antd";
import {
  DashboardTwoTone,
  ShoppingTwoTone,
  ShopTwoTone,
} from "@ant-design/icons";
import { nanoid as uuid } from "nanoid";
import { useRouter } from "next/router";
import { CSSProperties } from "react";
import { useSidebarContext } from "@context/sidebar/sidebar.context";

export const Sidebar = (): JSX.Element => {
  const { collapsed, setCollapsed } = useSidebarContext();

  const { push } = useRouter();

  const { Sider } = Layout;

  const handleCollapse = (collapsedValue: boolean) => {
    setCollapsed(collapsedValue);
  };

  const siderStyles = {
    overflow: "auto",
    height: "100vh",
    position: "fixed",
    left: 0,
    zIndex: 999,
  } as CSSProperties;

  const menuStyles = {
    marginTop: "62px",
  } as CSSProperties;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={handleCollapse}
      theme="dark"
      style={siderStyles}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        theme="dark"
        mode="vertical"
        key={uuid()}
        style={menuStyles}
      >
        <Menu.Item
          onClick={() => push("/dashboard")}
          key={uuid()}
          icon={<DashboardTwoTone />}
        >
          Dashboard
        </Menu.Item>

        <Menu.Item
          onClick={() => push("/shop")}
          key={uuid()}
          icon={<ShoppingTwoTone />}
        >
          Tienda
        </Menu.Item>

        <Menu.Item
          onClick={() => push("/store")}
          key={uuid()}
          icon={<ShopTwoTone />}
        >
          Inventario
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
