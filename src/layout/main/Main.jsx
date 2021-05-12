import React from "react";
import { Layout } from "antd";
import "./Main.css";
import Sidebar from "../sidebar/Sidebar";
import FooterComponent from "../footer/Footer";
import HeaderComponent from "../header/Header";

const Main = () => {
  /* const ac = new AbortController();

  const { location } = useHistory();
  const { pathname } = location;

  const [actualRoute, setActualRoute] = useState(pathname);

  const [{ component: Component }] = routes.filter(
    ({ route }) => route === actualRoute
  );

  useEffect(() => {
    setActualRoute(pathname);
    console.log(pathname);
    return ac.abort();
  }, [pathname]); */

  return (
    <Layout>
      <HeaderComponent />
      <Sidebar />
      <Layout className="site-layout">
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default Main;
