import { Dispatch, SetStateAction } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import {
  getDocs,
  collection,
  orderBy,
  query,
  addDoc,
  Timestamp,
} from "firebase/firestore";

import { auth, googleProvider, db } from "../config/firebase";
import { messageDetail } from "./utilTypes";

export const handleChangeTheme = () => {
  let parentClass = document.getElementsByTagName("html")[0].classList;
  if (parentClass.contains("dark")) {
    parentClass.remove("dark");
    parentClass.add("light");
    localStorage.setItem("theme", "light");
  } else {
    parentClass.remove("light");
    parentClass.add("dark");
    localStorage.setItem("theme", "dark");
  }
};

export const handleSignInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.log(err);
  }
};

export const handleSignOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export const getMessages = async (
  setterFunction: Dispatch<SetStateAction<messageDetail[]>>
) => {
  const collectionRef = collection(db, "/messages");
  const fetchedMessages = await getDocs(
    query(collectionRef, orderBy("timestamp", "asc"))
  );
  let messageDetails = fetchedMessages.docs.map(
    (doc) => doc.data() as messageDetail
  );
  setterFunction(messageDetails);
};

export const handleSendNewMessage = async (
  newMessage: string,
  setNewMessage: Dispatch<SetStateAction<string>>
) => {
  const collectionRef = collection(db, "/messages");
  try {
    await addDoc(collectionRef, {
      message: newMessage,
      userId: auth?.currentUser?.uid,
      timestamp: Timestamp.now(),
      imageUrl: auth?.currentUser?.photoURL,
    });
    console.log("New message added");
  } catch (err) {
    console.log(err);
  } finally {
    setNewMessage("");
  }
};
