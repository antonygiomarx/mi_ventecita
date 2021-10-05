import { Spinner } from "@components/Spinner/Spinner";
import { SidebarProvider } from "@context/sidebar/sidebar.context";
import { Layout } from "antd";
import { useRouter } from "next/router";
import React, { CSSProperties, useEffect } from "react";
import { useSigninCheck } from "reactfire";

import { Children } from "@interfaces/children";
import { Sidebar } from "@layout/Sidebar/Sidebar";
import { HeaderComponent } from "@layout/Header/Header";
import { FooterComponent } from "@layout/Footer/Footer";

const containerLayoutStyles = {
  minHeight: "100vh",
} as CSSProperties;

const mainLayoutStyles = {
  display: "flex",
  flexDirection: "column",
  margin: "64px 0 70px 80px",
  alignItems: "center",
  justifyContent: "center",
} as CSSProperties;

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
    <Layout style={containerLayoutStyles}>
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>
      <HeaderComponent />
      <Layout style={mainLayoutStyles}>
        {children}
        <FooterComponent />
      </Layout>
    </Layout>
  );
};
