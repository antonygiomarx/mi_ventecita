import store from "../../store/main/store";

const loginActions = {
  SET_LOGGED: () =>
    store.dispatch({
      type: "SET_LOGGED",
      logged: true,
    }),
};

export default loginActions;
