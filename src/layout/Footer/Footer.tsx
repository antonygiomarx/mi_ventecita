import { Footer } from "antd/lib/layout/layout";
import { CSSProperties } from "react";

const footerStyles = {
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  bottom: 0,
  position: "fixed",
  minWidth: "100%",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
} as CSSProperties;

export const FooterComponent = (): JSX.Element => (
  <Footer style={footerStyles}>
    Created by Mi Ventecita Team ©{new Date().getFullYear()}
  </Footer>
);
