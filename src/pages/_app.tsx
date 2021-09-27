import { getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import {
  AuthProvider,
  FirebaseAppProvider,
  FirestoreProvider,
  StorageProvider,
} from "reactfire";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { firebaseConfig } from "@firebase/firebase";
import { authReducer } from "@redux/reducers/auth.reducer";
import { shopReducer } from "@redux/reducers/shop.reducer";
import { storeReducer } from "@redux/reducers/store.reducer";

import "./App.css";

const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  store: storeReducer,
});

const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const firebaseApp = getApp();
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <AuthProvider sdk={getAuth(firebaseApp)}>
        <FirestoreProvider sdk={getFirestore(firebaseApp)}>
          <StorageProvider sdk={getStorage(firebaseApp)}>
            <Provider store={reduxStore}>
              <Component {...pageProps} />
            </Provider>
          </StorageProvider>
        </FirestoreProvider>
      </AuthProvider>
    </FirebaseAppProvider>
  );
};

export default MyApp;
