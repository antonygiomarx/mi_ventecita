import store from "../../store/main/store";

const { dispatch } = store;

const storeActions = {
  SET_PRODUCTS: (products) => {
    dispatch({
      type: "SET_PRODUCTS",
      products,
    });
  },

  ADD_PRODUCTS: (product) => {
    dispatch({
      type: "SET_PRODUCTS",
      product,
    });
  },
};

export default storeActions;
