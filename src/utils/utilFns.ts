// Library imports
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

// Local imports
import { auth, googleProvider, db } from "../config/firebase";
import { messageDetail } from "./utilTypes";

// Function for handling theme change. ie, dark mode and light mode
export const handleChangeTheme = () => {
  // Get class list of <html> root element
  let parentClass = document.getElementsByTagName("html")[0].classList;
  // If it is dark mode, remove it and change to light
  if (parentClass.contains("dark")) {
    parentClass.remove("dark");
    parentClass.add("light");
    // Set theme to localstoage too.
    localStorage.setItem("theme", "light");
  } else {
    // Does the opposite
    parentClass.remove("light");
    parentClass.add("dark");
    localStorage.setItem("theme", "dark");
  }
};

// Function for handling sign in with google button click
export const handleSignInWithGoogle = async () => {
  try {
    // Prompts a popup for google sign in
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.log(err);
  }
};

// Function for handling signout button click
export const handleSignOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

// Function for fetching data from server and do something with it
export const getMessages = async (
  // Takes a state setter function as argument
  setterFunction: Dispatch<SetStateAction<messageDetail[]>>
) => {
  // Reference to the /messages collection in firestore
  const collectionRef = collection(db, "/messages");

  // Get all documents from the collection in order of time
  const fetchedMessages = await getDocs(
    query(collectionRef, orderBy("timestamp", "asc"))
  );

  // Getting the essential data only from the retrieved document
  let messageDetails = fetchedMessages.docs.map(
    (doc) => doc.data() as messageDetail
  );

  // Set the specific data to to the state of element to render
  setterFunction(messageDetails);
};

// Function for handling sending a new message
export const handleSendNewMessage = async (
  // Takes two arguments
  // First one is the message itself
  newMessage: string,
  // Second is the state setter function to render it on screen
  setNewMessage: Dispatch<SetStateAction<string>>
) => {
  // Reference to the /messages collection in firestore
  const collectionRef = collection(db, "/messages");
  try {
    // Add document to firestore collection
    await addDoc(collectionRef, {
      // Message collected from the input box
      message: newMessage,
      // User id of the sender
      userId: auth?.currentUser?.uid,
      // Timestamp of the sending moment
      timestamp: Timestamp.now(),
      // URL of the profile pic of sender
      imageUrl: auth?.currentUser?.photoURL,
    });
    console.log("New message added");
  } catch (err) {
    console.log(err);
  } finally {
    setNewMessage("");
  }
};
