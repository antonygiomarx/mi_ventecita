import { Layout } from "antd";
import { useRouter } from "next/router";
import { useSigninCheck } from "reactfire";
import { HeaderComponent } from "../Header/Header";
import { SidebarComponent } from "../Sidebar/Sidebar";
import { FooterComponent } from "../Footer/Footer";
import { Spinner } from "../../components/Spinner/Spinner";

interface Children {
  children: JSX.Element;
}

export const Main = ({ children }: Children): JSX.Element => {
  const { push } = useRouter();
  const { data: signInCheckResult, status } = useSigninCheck();

  if (status === "loading") {
    return <Spinner />;
  }

  if (!signInCheckResult.signedIn) {
    push("/login");
  }

  return (
    <>
      <SidebarComponent />
      <HeaderComponent />
      <Layout className="site-layout">
        {children}
        <FooterComponent />
      </Layout>
    </>
  );
};
