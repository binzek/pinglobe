// Library imports
import { FC, useState, useEffect } from "react";

// Local imports
import { HomePage, ChatPage, HeaderBar, Footer } from "./components";
import { auth } from "./config/firebase";

const App: FC = () => {
  // State to decide which page to render, home or chat
  const [currentPage, setCurrentPage] = useState(<div />);

  // Check if the user is already logged in on pageload
  auth.onAuthStateChanged((user) =>
    // Set chat page if user logged in and home screen if not
    setCurrentPage(user ? <ChatPage /> : <HomePage />)
  );

  // Executes once when the app mounts
  useEffect(() => {
    // Check if there is a theme value in local storage
    // and created if it isn't there
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");
    // Setting the value from local storage as the class of root element
    document
      .getElementsByTagName("html")[0]
      .classList.add(localStorage.getItem("theme") || "light");
  }, []);

  return (
    <div className="flex h-screen flex-col justify-between bg-light-palette-offwhite dark:bg-dark-palette-offblack">
      <HeaderBar />
      {currentPage}
      <Footer />
    </div>
  );
};

export default App;
