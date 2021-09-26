import { Layout } from "antd";
import { useRouter } from "next/router";
import { useSigninCheck } from "reactfire";
import { useEffect } from "react";
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

  useEffect(() => {
    const ac = new AbortController();

    if (!signInCheckResult?.signedIn && status !== "loading") {
      push("/login");
    }

    return () => {
      ac.abort();
    };
  }, [status, signInCheckResult?.signedIn, push]);

  if (status === "loading") {
    return <Spinner />;
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
