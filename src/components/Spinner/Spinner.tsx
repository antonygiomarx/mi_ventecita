import { Spin } from "antd";

export const Spinner = (): JSX.Element => {
  return (
    <Spin
      style={{
        display: "grid",
        placeItems: "center",
        marginTop: "50%",
        background: "white",
      }}
    />
  );
};
