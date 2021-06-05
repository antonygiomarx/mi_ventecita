import React from "react";
import {
  DashboardTwoTone,
  ShoppingTwoTone,
  ShopTwoTone,
} from "@ant-design/icons";

import Login from "../views/Login/Login";
import Register from "../components/Registration/Register";
<<<<<<< HEAD
import StoreComponent from "../components/Store/Store";
import ShopComponent from "../components/Shop/Shop";
=======
import StoreComponent from "../layout/Store/Store";
import ShopComponent from "../layout/Shop/Shop";
import DashboardComponent from "../layout/Dashboard/Dashboard";
>>>>>>> ae777c0547d493f88636901857d71a6af259007f

const routes = [
  {
    name: "Dashboard",
    icon: <DashboardTwoTone />,
    route: "/dashboard",
    component: DashboardComponent,
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
