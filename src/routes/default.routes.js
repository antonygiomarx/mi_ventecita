import React from "react";
import { ShoppingTwoTone, ShopTwoTone } from "@ant-design/icons";
// import Store from "../components/layout/store/store";

const routes = [
  {
    name: "Tienda",
    icon: <ShoppingTwoTone />,
    route: "/store",
  },
  {
    name: "Inventario",
    icon: <ShopTwoTone />,
    route: "inventory",
  },
];

export default routes;
