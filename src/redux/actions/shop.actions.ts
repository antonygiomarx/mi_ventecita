import { Product } from "../../../src/models/product.model";
import store from "../../store/main/store";

const { dispatch } = store;

const SHOP_ACTIONS = {
  ADD_PRODUCT_TO_CART: (product: Product) => {
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      product,
    });
  },

  UPDATE_PRODUCT: (product: Product) => {
    dispatch({ type: "UPDATE_PRODUCT", product });
  },
};

export default SHOP_ACTIONS;
