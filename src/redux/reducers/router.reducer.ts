interface RouterReducerAction {
  type: string;
  route: string;
}

const ROUTER_REDUCER = (state = {}, action: RouterReducerAction) => {
  const { type, route } = action;
  switch (type) {
    case "SET_ROUTE":
      return {
        ...state,
        route,
      };

    default:
      return state;
  }
};

export default ROUTER_REDUCER;
