// Library imports
import { FC, useState } from "react";

// Local imports
import { HomePage, ChatPage, HeaderBar, Footer } from "./components";
import { auth } from "./config/firebase";

const App: FC = () => {
  const [currentPage, setCurrentPage] = useState(<div />);

  auth.onAuthStateChanged((user) =>
    setCurrentPage(user ? <ChatPage /> : <HomePage />)
  );

  return (
    <div className="flex min-h-screen flex-col justify-between bg-light-palette-offwhite dark:bg-dark-palette-offblack">
      <HeaderBar />
      {currentPage}
      {currentPage.type.name == "HomePage" && <Footer />}
    </div>
  );
};

export default App;
