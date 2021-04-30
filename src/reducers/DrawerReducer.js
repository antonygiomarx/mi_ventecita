const drawerReducer = (state = {}, action) => {
  switch (action.type) {
    case "on":
      return {
        ...state,
        drawerIsOpen: action.drawerIsOpen,
      };

    default:
      return state;
  }
};

export default drawerReducer;
