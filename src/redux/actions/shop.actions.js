import store from "../../store/main/store";

const { dispatch } = store;

const SHOP_ACTIONS = {
  ADD_PRODUCT_TO_CART: (product) => {
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      product,
    });
  },

  UPDATE_PRODUCT: (product) => {
    dispatch({ type: "UPDATE_PRODUCT", product });
  },
};

export default SHOP_ACTIONS;
