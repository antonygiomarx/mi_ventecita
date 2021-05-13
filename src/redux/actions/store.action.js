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
      type: "SET_PRODUCT",
      product,
    });
  },
  TOGGLE_MODAL: (value) => {
    store.dispatch({
      type: "TOGGLE_MODAL",
      value,
    });
  },
};

export default STORE_ACTIONS;
