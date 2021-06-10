import store from "../../store/main/store";

const { dispatch } = store;

const AUTH_ACTIONS = {
  LOGGED: (logged: boolean) =>
    dispatch({
      type: "LOGGED",
      logged,
    }),
  SET_USER: (username: string) =>
    dispatch({
      type: "INPUT_USERNAME",
      username,
    }),
  SET_PASSWORD: (password: string) => {
    dispatch({
      type: "INPUT_PASSWORD",
      password,
    });
  },
};

export default AUTH_ACTIONS;
