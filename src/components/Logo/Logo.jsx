import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="Logo">
      <SmileOutlined style={{ fontSize: "50px" }} />
      <h1 style={{ fontWeight: "bold" }}>Mi Ventecita</h1>
    </div>
  );
};
export default Logo;
