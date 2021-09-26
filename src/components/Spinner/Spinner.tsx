import { Spin } from "antd";
import { CSSProperties } from "react";

const spinStyles = {
  display: "grid",
  placeItems: "center",
  marginTop: "50%",
  background: "white",
} as CSSProperties;

export const Spinner = (): JSX.Element => <Spin style={spinStyles} />;
