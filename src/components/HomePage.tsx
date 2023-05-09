// Library imports
import { FC, useState } from "react";
import { signInWithPopup } from "firebase/auth";

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

  return (
    <div>
      <div className="mx-auto text-center">
        <p className="font-josefin-sans text-2xl font-light text-light-palette-black dark:text-dark-palette-white lg:text-3xl">
          Welcome to
        </p>
        <h1 className="font-yeseva-one text-5xl text-palette-blue lg:text-6xl">
          Pinglobe
        </h1>
        <button
          type="button"
          className="mt-12 rounded-lg border border-palette-blue px-3 py-1 font-josefin-sans text-lg text-light-palette-black duration-150 hover:bg-palette-blue hover:text-light-palette-white dark:text-dark-palette-white dark:hover:text-dark-palette-white"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default HomePage;
