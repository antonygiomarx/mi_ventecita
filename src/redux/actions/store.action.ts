import { Product } from "../../models/product.model";
import store from "../../store/main/store";

const { dispatch } = store;

const STORE_ACTIONS = {
  SET_PRODUCTS: (products: Product[]): void => {
    dispatch({
      type: "SET_PRODUCTS",
      products,
    });
  },

  ADD_PRODUCT: (product: Product) => {
    dispatch({
      type: "ADD_PRODUCT",
      product,
    });
  },
  TOGGLE_MODAL: (value: boolean) => {
    store.dispatch({
      type: "TOGGLE_MODAL",
      value,
    });
  },
  UPDATE_PRODUCT: (product: Product) => {
    dispatch({ type: "UPDATE_PRODUCT", product });
  },
};

export default STORE_ACTIONS;
