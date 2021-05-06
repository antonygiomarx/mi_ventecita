import React from "react";
import {
  DashboardTwoTone,
  ShoppingTwoTone,
  ShopTwoTone,
} from "@ant-design/icons";
import StoreComponent from "../components/store/Store";
import LoadingCard from "../components/card/Loading";
// import Store from "../components/layout/store/store";

const routes = [
  {
    name: "Dashboard",
    icon: <DashboardTwoTone />,
    route: "/dashboard",
    component: LoadingCard,
  },
  {
    name: "Tienda",
    icon: <ShoppingTwoTone />,
    route: "/shop",
    component: LoadingCard,
  },
  {
    name: "Inventario",
    icon: <ShopTwoTone />,
    route: "/store",
    component: StoreComponent,
  },
  {
    name: "Home",
    icon: "",
    route: "/",
    component: LoadingCard,
    hidden: true,
  },
];

export default routes;
