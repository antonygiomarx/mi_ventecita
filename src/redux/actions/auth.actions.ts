import { Action } from "redux";

export interface AuthAction extends Action {
  type: string;
  logged: boolean;
}

export const setLoggedIn = (): AuthAction => {
  return {
    type: "LOGGED",
    logged: true,
  };
};

export const setLoggedOut = (): AuthAction => {
  return {
    type: "LOGGED",
    logged: false,
  };
};
