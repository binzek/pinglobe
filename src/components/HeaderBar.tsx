// Library imports
import { FC } from "react";

// Local imports
import Logo from "../assets/logo.png";
import { auth } from "../config/firebase";
import {
  handleChangeTheme,
  handleSignInWithGoogle,
  handleSignOut,
} from "../utils/utilFns";

const HeaderBar: FC = () => {
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
          onClick={auth.currentUser ? handleSignOut : handleSignInWithGoogle}
        >
          {auth.currentUser ? "logout" : "login"}
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
