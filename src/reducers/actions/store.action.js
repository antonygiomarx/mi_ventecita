import store from "../../store/main/store";

const storeActions = {
  SET_PRODUCTS: (products) => {
    store.dispatch({
      type: "SET_PRODUCTS",
      products,
    });
  },

  ADD_PRODUCTS: (product) => {
    store.dispatch({
      type: "SET_PRODUCTS",
      product,
    });
  },
};

export default storeActions;
