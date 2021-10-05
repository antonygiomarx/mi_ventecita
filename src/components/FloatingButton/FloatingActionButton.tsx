import { Button } from "antd";
import { useDispatch } from "react-redux";

import { CSSProperties } from "react";
import { AddProductModalComponent } from "@components/Modal/AddProduct/AddProductModal";
import { openAddProductModal } from "@redux/actions/store.action";

const mainColor = "#001529";

const fabStyles = {
  position: "fixed",
  display: "grid",
  placeItems: "center",
  bottom: "50px",
  right: "50px",
  zIndex: 999,
  cursor: "pointer",
  background: mainColor,
  color: "#ccc",
  width: "50px",
  height: "50px",
  boxShadow: "inset 0 -3em 3em rgba(0,0,0,0.1)",
  border: mainColor,
} as CSSProperties;

export const FloatingActionButtonComponent = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        shape="circle"
        size="large"
        type="primary"
        title="Agregar Producto"
        onClick={() => {
          dispatch(openAddProductModal());
        }}
        style={fabStyles}
      >
        +
      </Button>
      <AddProductModalComponent />
    </>
  );
};
