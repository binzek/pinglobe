// Library imports
import { FC, useEffect, useState } from "react";
import { getDocs, collection, orderBy, query } from "firebase/firestore";

// Local imports
import { db } from "../config/firebase";
import { NewMessage } from ".";

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
      <div>
        {messageDetails.map((detailObj) => (
          <p>{detailObj.message}</p>
        ))}
      </div>
      <NewMessage getMessages={getMessages} />
    </div>
  );
};

export default Chats;
