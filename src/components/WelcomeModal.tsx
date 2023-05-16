import { FC, useState } from "react";

const WelcomeModal: FC = () => {
  // State to decide to show or not to show modal
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  if (!showWelcomeModal) return null;

  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-light-palette-black bg-opacity-40 dark:bg-dark-palette-black dark:bg-opacity-40">
      <div className="flex w-11/12 flex-col rounded-xl border border-palette-blue bg-light-palette-offwhite p-4 font-josefin-sans text-light-palette-black dark:bg-dark-palette-offblack dark:text-dark-palette-white md:w-3/4 lg:w-1/2 xl:w-1/3">
        <h3 className="self-center text-lg">
          Welcome to <span className="text-palette-blue">Pinglobe</span>
        </h3>
        <ul className="list-disc p-4">
          <li>
            This is a public chat application. So{" "}
            <span className="text-red-600 dark:text-red-500">
              anyone on the globe can see your messages
            </span>
            .
          </li>
          <li>
            Once you send a message,{" "}
            <span className="text-red-600 dark:text-red-500">
              you cannot edit or delete it
            </span>
            .
          </li>
          <li>Keep it clean as possible</li>
        </ul>
        <button
          onClick={() => setShowWelcomeModal(false)}
          type="button"
          className="rounded-lg bg-palette-blue p-2 text-light-palette-white dark:text-dark-palette-white"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
