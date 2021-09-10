import { Auth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useAuth } from "reactfire";
import { setLoggedOut } from "../redux/actions/auth.actions";
import { setSessionToLocalStorage } from "../utils/utils";

const signOut = (auth: Auth) =>
  auth.signOut().then(() => console.log("signed out"));

export const useLogout = (): (() => void) => {
  const dispatch = useDispatch();
  const auth = useAuth();

  const logout = () => {
    setSessionToLocalStorage("false");
    dispatch(setLoggedOut());
    signOut(auth);
  };

  return logout;
};
