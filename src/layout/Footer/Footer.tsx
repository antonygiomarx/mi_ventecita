import { Footer } from "antd/lib/layout/layout";

const FooterComponent = () => {
  return (
    <Footer
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        bottom: 0,
      }}
    >
      Created by Mi Ventecita Team ©{new Date().getFullYear()}
    </Footer>
  );
};

export default FooterComponent;
