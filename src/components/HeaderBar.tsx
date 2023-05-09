// Library imports
import { FC, useEffect } from "react";
import { signInWithPopup, signOut } from "firebase/auth";

// Local imports
import Logo from "../assets/logo.png";
import { auth, googleProvider } from "../config/firebase";

const HeaderBar: FC = () => {
  let parentClass = document.getElementsByTagName("html")[0].classList;

  const handleChangeTheme = () => {
    if (parentClass.contains("dark")) {
      parentClass.remove("dark");
      parentClass.add("light");
      localStorage.setItem("theme", "light");
    } else {
      parentClass.remove("light");
      parentClass.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");
    document
      .getElementsByTagName("html")[0]
      .classList.add(localStorage.getItem("theme") || "light");
  }, []);

  return (
    <div className="mx-auto mt-2 flex w-[96%] select-none items-center justify-between rounded-lg bg-palette-blue bg-opacity-25 px-2 py-1 dark:bg-opacity-20 md:mt-3 lg:w-[97%] lg:px-4 xl:mt-2 xl:w-[98%] 2xl:w-[99%]">
      <img
        src={Logo}
        alt="Pinglobe logo, ie. two blue chat bubbles"
        className="h-10 lg:h-11"
      />
      <div className="flex items-center gap-4 text-palette-blue lg:gap-5">
        <span
          className="material-symbols-rounded cursor-pointer text-3xl"
          onClick={() => {
            if (auth.currentUser) handleSignOut();
            else handleSignInWithGoogle();
          }}
        >
          {auth?.currentUser ? "logout" : "login"}
        </span>
        <span
          className="material-symbols-rounded cursor-pointer text-3xl"
          onClick={handleChangeTheme}
        >
          {document.getElementsByTagName("html")[0].classList.contains("dark")
            ? "light_mode"
            : "dark_mode"}
        </span>
      </div>
    </div>
  );
};

export default HeaderBar;
