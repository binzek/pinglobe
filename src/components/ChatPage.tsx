// Library imports
import { FC } from "react";

// Local imports
import { Chats } from "./";

const ChatPage: FC = () => {
  return (
    <div className="hide-scrollbar mx-auto mt-3 w-[96%] overflow-y-scroll md:w-2/3 lg:w-1/2 xl:w-1/3">
      <Chats />
    </div>
  );
};

export default ChatPage;
