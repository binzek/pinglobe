import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFiPzE0igPmeSA_7bKGHTXQrVTkIQhFD0",
  authDomain: "pinglobe-chat.firebaseapp.com",
  projectId: "pinglobe-chat",
  storageBucket: "pinglobe-chat.appspot.com",
  messagingSenderId: "526144985822",
  appId: "1:526144985822:web:2687ba2195296ceab0c04f",
  measurementId: "G-2HXPCBK7MT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
