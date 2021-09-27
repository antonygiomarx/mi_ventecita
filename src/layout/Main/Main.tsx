import { Spinner } from "@components/Spinner/Spinner";
import { SidebarProvider } from "@context/sidebar/sidebar.context";
import { Layout } from "antd";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSigninCheck } from "reactfire";

import { Children } from "@interfaces/children";
import { Sidebar } from "@layout/Sidebar/Sidebar";
import { HeaderComponent } from "@layout/Header/Header";
import { FooterComponent } from "@layout/Footer/Footer";

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
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>
      <HeaderComponent />
      <Layout className="site-layout">
        {children}
        <FooterComponent />
      </Layout>
    </Layout>
  );
};
