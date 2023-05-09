// Library imports
import { FC, useState } from "react";

// Local imports
import { HomePage, ChatPage, HeaderBar } from "./components";
import { auth } from "./config/firebase";

const App: FC = () => {
  const [currentPage, setCurrentPage] = useState(<div />);

  auth.onAuthStateChanged((user) =>
    setCurrentPage(user ? <ChatPage /> : <HomePage />)
  );

  return (
    <div className="flex min-h-screen flex-col bg-light-palette-offwhite dark:bg-dark-palette-offblack">
      <HeaderBar />
      {currentPage}
    </div>
  );
};

export default App;
