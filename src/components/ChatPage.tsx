// Library imports
import { FC } from "react";

// Local imports
import { Chats, NewMessage } from "./";

const ChatPage: FC = () => {
  return (
    <div className="mx-auto flex h-screen w-[96%] flex-col gap-2 pb-10 pt-[66px] md:w-2/3 lg:w-1/2 xl:w-1/3">
      <Chats />
      <NewMessage />
    </div>
  );
};

export default ChatPage;
