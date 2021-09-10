import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider, FirestoreProvider, useFirebaseApp } from "reactfire";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { Main } from "./layout/Main/Main";
import "./App.css";

const App = (): JSX.Element => {
  const firebaseApp = useFirebaseApp();
  return (
    <Router>
      <Layout>
        <AuthProvider sdk={getAuth(firebaseApp)}>
          <FirestoreProvider sdk={getFirestore(firebaseApp)}>
            <Main />
          </FirestoreProvider>
        </AuthProvider>
      </Layout>
    </Router>
  );
};

export default App;
