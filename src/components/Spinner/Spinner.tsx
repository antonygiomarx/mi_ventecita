import { Spin } from "antd";

export const Spinner = (): JSX.Element => (
  <Spin
    style={{
      display: "grid",
      placeItems: "center",
      marginTop: "50%",
      background: "white",
    }}
  />
);
