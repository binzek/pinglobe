// Library imports
import { FC, useState } from "react";
import { signOut } from "firebase/auth";

// Local imports
import { auth } from "../config/firebase";
import { Chats } from "./";

const ChatPage: FC = () => {
  //State for showing signed in user
  const [signedInUser, setSignedInUser] = useState(
    auth?.currentUser?.email || "Not Signed In"
  );

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
      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>
      <Chats />
    </div>
  );
};

export default ChatPage;
