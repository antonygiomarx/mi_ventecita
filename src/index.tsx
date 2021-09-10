import { applyMiddleware, combineReducers, createStore } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { FirebaseAppProvider } from "reactfire";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import { authReducer } from "./redux/reducers/auth.reducer";
import { shopReducer } from "./redux/reducers/shop.reducer";
import { storeReducer } from "./redux/reducers/store.reducer";
import { firebaseConfig } from "./firebase/firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  store: storeReducer,
});

const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </FirebaseAppProvider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
