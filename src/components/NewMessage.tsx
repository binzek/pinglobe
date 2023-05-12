// Library imports
import { FC, useState } from "react";
import TextArea from "react-textarea-autosize";

// Local imports
import { handleSendNewMessage } from "../utils/utilFns";

const NewMessage: FC = () => {
  // State of new message input
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="sticky bottom-0 mx-auto flex w-full items-end justify-between gap-2 bg-light-palette-offwhite py-3 font-inter dark:bg-dark-palette-offblack ">
      <TextArea
        name="new-message"
        id="new-message"
        placeholder="Type your message..."
        minRows={1}
        maxRows={5}
        className="hide-scrollbar w-full resize-none rounded-lg border-2 border-palette-blue bg-transparent p-2 text-dark-palette-black outline-none  placeholder:font-light dark:text-dark-palette-white"
        // Changing input state value while inputting
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-palette-blue p-2"
        // Function triggers when send button clicks.
        // Passing message in input and function for changing its state.
        // Refer src/utils/utilFns.ts for more details.
        onClick={() => handleSendNewMessage(newMessage, setNewMessage)}
      >
        <span className="material-symbols-rounded text-3xl font-extralight text-light-palette-white dark:text-dark-palette-white">
          done
        </span>
      </button>
    </div>
  );
};

export default NewMessage;
