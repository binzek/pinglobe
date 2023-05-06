// Library imports
import { FC, useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";

// Local imports
import { auth, googleProvider } from "../config/firebase";

const HomePage: FC = () => {
  //State for showing signed in user
  const [signedInUser, setSignedInUser] = useState(
    auth?.currentUser?.email || "Not Signed In"
  );

  // Checks the sign in status of user
  auth.onAuthStateChanged((user) =>
    setSignedInUser(user?.email || "Not Signed In")
  );

  // Handle the Google sign in
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    } finally {
      setSignedInUser(auth?.currentUser?.email || "Not Signed In");
    }
  };

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    } finally {
      setSignedInUser(auth?.currentUser?.email || "Not Signed In");
    }
  };

  return (
    <div>
      <p>{signedInUser}</p>
      <button
        type="button"
        onClick={() => {
          // Checking whether the user is alread signed in or not
          auth?.currentUser?.email
            ? console.log("Already Signed In")
            : handleSignInWithGoogle();
        }}
      >
        Sign In With Google
      </button>
      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default HomePage;
