export type messageDetail = {
  imageUrl: string;
  message: string;
  timestamp: {
    nanoseconds: number;
    seconds: number;
  };
  userId: string;
};
