import store from "../../store/main/store";

const { dispatch } = store;

const AUTH_ACTIONS = {
  LOGGED: (logged) =>
    dispatch({
      type: "LOGGED",
      logged,
    }),
  SET_USER: (username) =>
    dispatch({
      type: "INPUT_USERNAME",
      username,
    }),
  SET_PASSWORD: (password) => {
    dispatch({
      type: "INPUT_PASSWORD",
      password,
    });
  },
};

export default AUTH_ACTIONS;
