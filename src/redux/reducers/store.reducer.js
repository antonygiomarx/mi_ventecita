const STORE_REDUCER = (state = {}, action) => {
  // eslint-disable-next-line prefer-const
  let { type, products, value, product } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
      };

    case "SET_PRODUCTS":
      return {
        ...state,
        products,
      };

    case "TOGGLE_MODAL":
      return {
        ...state,
        modalIsOpen: value,
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products
          .map((productsCtx) =>
            product.id === productsCtx.id
              ? { ...productsCtx, product }
              : productsCtx
          )
          .sort(),
      };

    default:
      return state;
  }
};
export default STORE_REDUCER;
