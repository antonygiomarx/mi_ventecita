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
    default:
      return state;
  }
};

export default storeReducer;
