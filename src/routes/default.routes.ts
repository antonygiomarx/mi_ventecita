import {
  DashboardTwoTone,
  ShoppingTwoTone,
  ShopTwoTone,
} from "@ant-design/icons";

import ShopComponent from "../layout/Shop/Shop";
import DashboardComponent from "../layout/Dashboard/Dashboard";
import Login from "../views/Login/Login";
import { Route } from "../models/route.model";
import StoreComponent from "../layout/Store/Store";

const routes: Route[] = [
  new Route({
    name: "Dashboard",
    component: DashboardComponent(),
    route: "/dashboard",
    icon: DashboardTwoTone,
  }),
  new Route({
    name: "Tienda",
    component: ShopComponent(),
    route: "/shop",
    icon: ShoppingTwoTone,
  }),
  new Route({
    name: "Inventario",
    component: StoreComponent({ isSelectable: false }),
    route: "/store",
    icon: ShopTwoTone,
  }),
  new Route({
    name: "Login",
    component: Login(),
    route: "/login",
    hidden: true,
    isMain: true,
    icon: ShopTwoTone,
  }),
  new Route({
    name: "Register",
    component: DashboardComponent(),
    route: "/register",
    hidden: true,
    isMain: true,
    icon: ShopTwoTone,
  }),
];

export default routes;
