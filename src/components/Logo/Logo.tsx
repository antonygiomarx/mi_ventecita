import { ShopOutlined } from "@ant-design/icons";
import { CSSProperties } from "react";

const logoStyles = {
  display: "flex",
  width: "50px",
  height: "50px",
  justifyContent: "center",
  alignItems: "center",
} as CSSProperties;

const Logo = (): JSX.Element => (
  <span style={logoStyles}>
    <ShopOutlined width="50px" height="50px" />
  </span>
);

export default Logo;
