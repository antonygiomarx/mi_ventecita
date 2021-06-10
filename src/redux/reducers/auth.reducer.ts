interface AuthReducerAction {
  username: string;
  password: string;
  logged: boolean;
  type: string;
}

const AUTH_REDUCER = (state = {}, action: AuthReducerAction) => {
  const { username, password, logged, type } = action;

  switch (type) {
    case "INPUT_USERNAME":
      return {
        ...state,
        username,
      };
    case "INPUT_PASSWORD":
      return {
        ...state,
        password,
      };
    case "LOGGED":
      return {
        ...state,
        logged,
      };

    default:
      return state;
  }
};

export default AUTH_REDUCER;
