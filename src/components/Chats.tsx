// Library imports
import { FC, useEffect, useState } from "react";
import { onSnapshot, query } from "firebase/firestore";

// Local imports
import { auth } from "../config/firebase";
import UserIcon from "../assets/user.png";
import { collectionRef, getMessages } from "../utils/utilFns";
import { messageDetail } from "../utils/utilTypes";

const Chats: FC = () => {
  // State to store the object comes as messageDetails.
  // Refer src/utils/utilTypes.ts to know about this object.
  const [messageDetails, setMessageDetails] = useState<messageDetail[]>([]);

  // Execute once when the app mounts
  useEffect(() => {
    // Function for fetching and showing messages from server.
    // Refer src/utils/utilFns.ts to know more about the function.
    // Executes on every change in backend
    onSnapshot(query(collectionRef), () => getMessages(setMessageDetails));
  }, []);

  // Scroll to bottom when each message arrives
  useEffect(() => {
    const chats = document.getElementById("chats");
    if (chats) chats.scrollTop = chats.scrollHeight;
  }, [messageDetails]);

  return (
    <div
      id="chats"
      className="hide-scrollbar flex flex-col gap-2 overflow-y-scroll"
    >
      {/* Show messages by others and messages by current user
      differntly by applying different styles. */}
      {messageDetails.map((detailObj, index) =>
        detailObj.userId === auth.currentUser?.uid ? (
          <div className="flex items-end gap-1" key={index}>
            <p className="hide-scrollbar ml-auto w-2/3 overflow-scroll whitespace-pre-line rounded-lg bg-light-palette-gray p-2 font-inter text-light-palette-black dark:bg-dark-palette-gray dark:text-dark-palette-white">
              {detailObj.message}
            </p>
            <img
              src={detailObj.imageUrl || UserIcon}
              alt="User profile picture"
              className="h-9 rounded-full"
            />
          </div>
        ) : (
          <div className="flex items-end gap-1" key={index}>
            <img
              src={detailObj.imageUrl || UserIcon}
              alt="User profile picture"
              className="h-9 rounded-full"
            />
            <p className="hide-scrollbar w-2/3 overflow-scroll whitespace-pre-line rounded-lg bg-light-palette-white p-2 font-inter text-light-palette-black dark:bg-dark-palette-black dark:text-dark-palette-white">
              {detailObj.message}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default Chats;
