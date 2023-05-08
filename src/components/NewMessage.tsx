// Library imports
import { FC, useState } from "react";
import { addDoc, collection } from "firebase/firestore";

// Local imports
import { auth, db } from "../config/firebase";

const NewMessage: FC = () => {
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
      });
      console.log("New message added");
    } catch (err) {
      console.log(err);
    } finally {
      setNewMessage("");
    }
  };

  return (
    <div>
      <textarea
        name="new-message"
        id="new-message"
        placeholder="Type your message..."
        cols={50}
        rows={2}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      ></textarea>
      <button type="button" onClick={handleSendNewMessage}>
        Send
      </button>
    </div>
  );
};

export default NewMessage;
