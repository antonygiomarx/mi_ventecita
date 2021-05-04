import { createStore } from "redux";
import storeReducer from "../../reducers/StoreReducer";

const store = createStore(storeReducer);

export default store;
