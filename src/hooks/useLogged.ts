import { useDispatch, useSelector } from "react-redux";
import { useSigninCheck } from "reactfire";
import { setLoggedIn } from "../redux/actions/auth.actions";
import { RootState } from "../redux/models/root-state.model";

export const useLogged = (): boolean => {
  const dispatch = useDispatch();
  const { data: signInCheckResult } = useSigninCheck();

  if (signInCheckResult.signedIn) {
    dispatch(setLoggedIn());
  }

  const logged = useSelector<RootState>(({ auth }) => auth.logged);

  console.log(logged);

  return logged as boolean;
};
