// Object type of each message detail of the details array fetched from server
export type messageDetail = {
  // URL of the google profile picture of sender
  imageUrl: string;
  // Message text
  message: string;
  // Time of the sending
  timestamp: {
    nanoseconds: number;
    seconds: number;
  };
  // User id of sender
  userId: string;
};
