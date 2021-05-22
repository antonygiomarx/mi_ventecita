const STORE_REDUCER = (state = {}, action) => {
  // eslint-disable-next-line prefer-const
  let { type, products, word, value, product } = action;

  console.log(product, products, state);
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

    case "SEARCH_PRODUCT":
      return {
        ...state,
        PRODUCT_TO_FILTER: word,
      };

    case "TOGGLE_MODAL":
      return {
        ...state,
        modalIsOpen: value,
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((productsCtx) =>
          product.id === productsCtx.id
            ? { ...productsCtx, product }
            : productsCtx
        ),
      };
    default:
      return state;
  }
};
export default STORE_REDUCER;
