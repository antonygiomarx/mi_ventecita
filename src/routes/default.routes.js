import React from "react";
import {
  DashboardTwoTone,
  ShoppingTwoTone,
  ShopTwoTone,
} from "@ant-design/icons";
import StoreComponent from "../components/store/Store";
import LoadingCard from "../components/card/Loading";
import Register from "../layout/loginComponents/registration/Register";
// import Store from "../components/layout/store/store";
import Login from "../views/login/Login";

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
    name: "Login",
    route: "/login",
    component: Login,
    hidden: true,
  },
  {
    name: "Register",
    route: "/register",
    component: Register,
    hidden: true,
  },
];

export default routes;
