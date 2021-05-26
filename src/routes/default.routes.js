import React from "react";
import {
  DashboardTwoTone,
  ShoppingTwoTone,
  ShopTwoTone,
} from "@ant-design/icons";

import LoadingCard from "../components/card/Loading";
import Login from "../views/login/Login";
import Register from "../components/registration/Register";
import StoreComponent from "../components/store/Store";
import ShopComponent from "../components/shop/Shop";

const routes = [
  {
    name: "Dashboard",
    icon: <DashboardTwoTone />,
    route: "/dashboard",
    component: LoadingCard,
    isMain: true,
  },

  {
    name: "Tienda",
    icon: <ShoppingTwoTone />,
    route: "/shop",
    component: ShopComponent,
  },
  {
    name: "Inventario",
    icon: <ShopTwoTone />,
    route: "/store",
    component: StoreComponent,
  },
  {
    name: "Login",
    route: "/login",
    component: Login,
    hidden: true,
    isMain: true,
  },
  {
    name: "Register",
    route: "/register",
    component: Register,
    hidden: true,
    isMain: true,
  },
];

export default routes;
