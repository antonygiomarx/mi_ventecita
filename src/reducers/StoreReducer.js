const storeReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
      };

    case "SET_PRODUCTS":
      return {
        ...state,
        PRODUCTS: action.json,
      };

    case "SEARCH_PRODUCT":
      return {
        ...state,
        PRODUCT_TO_FILTER: action.word,
      };
    default:
      return state;
  }
};

export default storeReducer;
