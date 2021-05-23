import React from "react";
import {
  DashboardTwoTone,
  ShoppingTwoTone,
  ShopTwoTone,
} from "@ant-design/icons";

import LoadingCard from "../components/Card/Loading";
import Login from "../views/Login/Login";
import Register from "../components/Registration/Register";
import StoreComponent from "../components/Store/Store";

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
    component: LoadingCard,
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
