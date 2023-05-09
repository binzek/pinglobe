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
      <p>{signedInUser}</p>
    </div>
  );
};

export default HomePage;
