// Library imports
import { FC, useEffect, useState } from "react";
import { getDocs, collection, orderBy, query } from "firebase/firestore";

// Local imports
import { auth, db } from "../config/firebase";
import { NewMessage } from ".";
import UserIcon from "../assets/user.png";

const Chats: FC = () => {
  const [messageDetails, setMessageDetails] = useState<any[]>([]);

  const collectionRef = collection(db, "/messages");

  const getMessages = async () => {
    const fetchedMessages = await getDocs(
      query(collectionRef, orderBy("timestamp", "asc"))
    );
    setMessageDetails(fetchedMessages.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-2">
        {messageDetails.map((detailObj) =>
          detailObj.userId === auth.currentUser?.uid ? (
            <div className="flex items-end gap-1">
              <p className="hide-scrollbar ml-auto w-2/3 overflow-scroll whitespace-pre-line rounded-lg bg-light-palette-gray p-2 font-inter text-light-palette-black dark:bg-dark-palette-gray dark:text-dark-palette-white">
                {detailObj.message}
              </p>
              <img
                src={auth?.currentUser?.photoURL || UserIcon}
                alt="User profile picture"
                className="h-9 rounded-full"
              />
            </div>
          ) : (
            <div className="flex items-end gap-1">
              <img
                src={auth?.currentUser?.photoURL || UserIcon}
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
      <NewMessage getMessages={getMessages} />
    </div>
  );
};

export default Chats;
