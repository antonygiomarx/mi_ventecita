import store from "../../store/main/store";

const { dispatch } = store;

const STORE_ACTIONS = {
  SET_PRODUCTS: (products) => {
    dispatch({
      type: "SET_PRODUCTS",
      products,
    });
  },

  ADD_PRODUCT: (product) => {
    dispatch({
      type: "ADD_PRODUCT",
      product,
    });
  },
  TOGGLE_MODAL: (value) => {
    store.dispatch({
      type: "TOGGLE_MODAL",
      value,
    });
  },
  UPDATE_PRODUCT: (product) => {
    dispatch({ type: "UPDATE_PRODUCT", product });
  },
};

export default STORE_ACTIONS;
