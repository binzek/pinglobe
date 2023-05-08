import { FC } from "react";

const NewMessage: FC = () => {
  return (
    <div>
      <textarea
        name="new-message"
        id="new-message"
        placeholder="Type your message..."
        cols={50}
        rows={2}
      ></textarea>
      <button type="button">Send</button>
    </div>
  );
};

export default NewMessage;
