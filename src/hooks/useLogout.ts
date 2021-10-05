import { Auth } from "firebase/auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useAuth } from "reactfire";

import { setLoggedOut } from "@redux/actions/auth.actions";
import { setSessionToLocalStorage } from "@utils/utils";

const signOut = (auth: Auth) =>
  auth.signOut().then(() => console.log("signed out"));

export const useLogout = (): (() => void) => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const { push } = useRouter();

  const logout = () => {
    setSessionToLocalStorage("false");
    dispatch(setLoggedOut());
    signOut(auth);
    push("login");
  };

  return logout;
};
