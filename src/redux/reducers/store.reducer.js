const STORE_REDUCER = (state = {}, action) => {
  const { type, products, word, value, updatedProducts } = action;
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
    case "UPDATED_PRODUCTS":
      return {
        ...state,
        updatedProducts,
      };
    default:
      return state;
  }
};
export default STORE_REDUCER;
