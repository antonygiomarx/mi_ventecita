const storeReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
      };

    case "SET_PRODUCTS":
      return {
        ...state,
        PRODUCTS: action.products,
      };

    case "SEARCH_PRODUCT":
      return {
        ...state,
        PRODUCT_TO_FILTER: action.word,
      };

    case "TOGGLE_MODAL":
      return {
        ...state,
        modalIsOpen: action.value,
      };

    case "INPUT_USER":
      return {
        ...state,
        username: action.user,
      };
    case "INPUT_PASSWORD":
      return {
        ...state,
        password: action.pass,
      };
    case "SET_LOGGED":
      return {
        ...state,
        logged: action.logged,
      };

    default:
      return state;
  }
};

export default storeReducer;
