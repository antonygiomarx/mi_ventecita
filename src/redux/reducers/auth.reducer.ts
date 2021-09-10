import { AuthState } from "../models/auth-state.model";

interface AuthReducerAction {
  username: string;
  password: string;
  logged: boolean;
  type: string;
}

export const authReducer = (
  state: AuthState = {
    logged: false,
    password: "",
    username: "",
  },
  action: AuthReducerAction,
): AuthState => {
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
