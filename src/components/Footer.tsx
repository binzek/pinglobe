// Library imports
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="fixed bottom-0 left-1/2 flex -translate-x-1/2 justify-center gap-3">
      <a href="https://github.com/binzek/pinglobe/">
        <span className="material-symbols-rounded font-extralight text-gray-400 hover:text-red-500">
          code
        </span>
      </a>
      <a href="https://www.binzek.com/">
        <span className="material-symbols-rounded font-extralight text-gray-400 hover:text-blue-500">
          alternate_email
        </span>
      </a>
      <a href="https://buymeacoffee.com/binzek/">
        <span className="material-symbols-rounded font-extralight text-gray-400 hover:text-yellow-500">
          coffee
        </span>
      </a>
    </div>
  );
};

export default Footer;
