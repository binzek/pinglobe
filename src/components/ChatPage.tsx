// Library imports
import { FC } from "react";

// Local imports
import { Chats, NewMessage } from "./";

const ChatPage: FC = () => {
  return (
    <div className="hide-scrollbar relative mx-auto mt-3 flex w-[96%] flex-col justify-between overflow-y-scroll md:w-2/3 lg:w-1/2 xl:w-1/3">
      <Chats />
      <NewMessage />
    </div>
  );
};

export default ChatPage;
