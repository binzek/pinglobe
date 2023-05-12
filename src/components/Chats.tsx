// Library imports
import { FC, useEffect, useState } from "react";

// Local imports
import { auth } from "../config/firebase";
import UserIcon from "../assets/user.png";
import { getMessages, messageDetail } from "../utils/utilFns";

const Chats: FC = () => {
  const [messageDetails, setMessageDetails] = useState<messageDetail[]>([]);

  useEffect(() => {
    getMessages(setMessageDetails);
  }, []);

  return (
    <div className="flex flex-col gap-2">
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
