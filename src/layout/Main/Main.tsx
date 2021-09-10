import { Layout } from "antd";
import { Route, useHistory } from "react-router-dom";

import { useSigninCheck } from "reactfire";
import { HeaderComponent } from "../Header/Header";
import { DashboardComponent } from "../Dashboard/Dashboard";
import { SidebarComponent } from "../Sidebar/Sidebar";
import { ShopComponent } from "../Shop/Shop";
import { StoreComponent } from "../Store/Store";
import { FooterComponent } from "../Footer/Footer";
import { Login } from "../Login/Login";
import { Spinner } from "../../components/Spinner/Spinner";

import "./Main.css";

export const Main = (): JSX.Element => {
  const history = useHistory();

  const { data: signInCheckResult, status } = useSigninCheck();

  if (status === "loading") {
    return <Spinner />;
  }

  if (!signInCheckResult.signedIn) {
    history.push("/login");
    return (
      <>
        <Route path="/login">
          <Login />
        </Route>
      </>
    );
  }

  history.push("/");

  return (
    <Route path="/">
      <SidebarComponent />
      <HeaderComponent />
      <Layout className="site-layout">
        <Route path={["/", "/dashboard"]} exact>
          <DashboardComponent />
        </Route>
        <Route path={["/shop"]} exact>
          <ShopComponent />
        </Route>
        <Route path={["/store"]} exact>
          <StoreComponent isSelectable={false} />
        </Route>
        <FooterComponent />
      </Layout>
    </Route>
  );
};
