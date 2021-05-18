import * as functions from "firebase-functions";
import app from "./app";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const api = functions.https.onRequest(app);
