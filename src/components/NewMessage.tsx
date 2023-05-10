// Library imports
import { FC, useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import TextArea from "react-textarea-autosize";

// Local imports
import { auth, db } from "../config/firebase";

type Props = {
  getMessages: () => void;
};

const NewMessage: FC<Props> = ({ getMessages }) => {
  // State of new message input
  const [newMessage, setNewMessage] = useState("");

  // Reference of 'messages' collection
  const collectionRef = collection(db, "/messages");

  // Handle adding new message to db
  const handleSendNewMessage = async () => {
    try {
      await addDoc(collectionRef, {
        message: newMessage,
        userId: auth?.currentUser?.uid,
        timestamp: Timestamp.now(),
        imageUrl: auth?.currentUser?.photoURL,
      });
      console.log("New message added");
      getMessages();
    } catch (err) {
      console.log(err);
    } finally {
      setNewMessage("");
    }
  };

  return (
    <div className="mx-auto flex items-end justify-between gap-2 py-2 font-inter ">
      <TextArea
        name="new-message"
        id="new-message"
        placeholder="Type your message..."
        minRows={1}
        maxRows={5}
        className="hide-scrollbar w-full resize-none rounded-lg border-2 border-palette-blue bg-transparent p-2 text-dark-palette-black outline-none  placeholder:font-light dark:text-dark-palette-white"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-palette-blue p-2"
        onClick={handleSendNewMessage}
      >
        <span className="material-symbols-rounded text-3xl font-extralight text-light-palette-white dark:text-dark-palette-white">
          done
        </span>
      </button>
    </div>
  );
};

export default NewMessage;
