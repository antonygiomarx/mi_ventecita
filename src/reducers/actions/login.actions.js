import store from "../../store/main/store";

const loginActions = {
  SET_LOGGED: () =>
    store.dispatch({
      type: "SET_LOGGED",
      logged: true,
    }),
  SET_UNLOGGED: () =>
    store.dispatch({
      type: "SET_UNLOGGED",
      logged: false,
    }),
};

export default loginActions;
