import { Button } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import { AddProductModalComponent } from "../Modal/AddProduct/AddProductModal";
import { openAddProductModal } from "../../redux/actions/store.action";

export const FloatingActionButtonComponent = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        shape="circle"
        size="large"
        type="primary"
        title="Agregar Producto"
        icon={<PlusCircleTwoTone />}
        className="fab-button"
        onClick={() => {
          dispatch(openAddProductModal());
        }}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          zIndex: 999,
          cursor: "pointer",
        }}
      />
      <AddProductModalComponent />
    </>
  );
};
