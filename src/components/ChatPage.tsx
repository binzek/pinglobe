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

  return (
    <div>
      <p>{signedInUser}</p>
      <Chats />
    </div>
  );
};

export default ChatPage;
