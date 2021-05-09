import store from "../../store/main/store";

const { dispatch } = store;

const ROUTER_ACTIONS = {
  SET_ROUTE: (route) => {
    dispatch({
      type: "SET_ROUTE",
      route,
    });
  },
};

export default ROUTER_ACTIONS;
