import { createStore, combineReducers } from "redux";
import STORE_REDUCER from "../../redux/reducers/store.reducer";
import ROUTER_REDUCER from "../../redux/reducers/router.reducer";
import AUTH_REDUCER from "../../redux/reducers/auth.reducer";

const reducers = combineReducers({
  STORE_REDUCER,
  ROUTER_REDUCER,
  AUTH_REDUCER,
});

const store = createStore(reducers);

export default store;
