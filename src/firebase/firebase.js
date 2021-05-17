import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth";
import * as storage from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_0lzxM9ndDYeAddTImhfoU2Sh9ygru9U",
  authDomain: "miventecita-6be84.firebaseapp.com",
  projectId: "miventecita-6be84",
  storageBucket: "miventecita-6be84.appspot.com",
  messagingSenderId: "71527756420",
  appId: "1:71527756420:web:21bf6f6ac7c6cb36b708d1",
  measurementId: "G-405WW4FXBB",
};

initializeApp(firebaseConfig);

const uploadImage = async (image) => {
  const storageRef = storage().ref();

  const imageResponse = await storageRef.put(image);
  console.log(imageResponse);
};

const FIREBASE_SERVICE = {
  AUTH: auth,
  STORAGE: {
    storage,
    uploadImage,
  },
};

export { FIREBASE_SERVICE, firebaseConfig };
