// Library imports
import { FC, useState } from "react";

// Local imports
import { HomePage, ChatPage } from "./components";
import { auth } from "./config/firebase";

const App: FC = () => {
  const [currentPage, setCurrentPage] = useState(<div />);

  auth.onAuthStateChanged((user) =>
    setCurrentPage(user ? <ChatPage /> : <HomePage />)
  );

  return <div>{currentPage}</div>;
};

export default App;
