import { createStore } from "redux";
import drawerReducer from "../../reducers/DrawerReducer";

const store = createStore(drawerReducer);

export default store;
