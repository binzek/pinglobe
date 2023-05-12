// Library imports
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="flex justify-center gap-3">
      <a href="https://github.com/wajid-nv/pinglobe/">
        <span className="material-symbols-rounded font-extralight text-gray-400 hover:text-red-500">
          code
        </span>
      </a>
      <a href="https://wajid.me/">
        <span className="material-symbols-rounded font-extralight text-gray-400 hover:text-blue-500">
          alternate_email
        </span>
      </a>
      <a href="https://buymeacoffee.com/wajidnv/">
        <span className="material-symbols-rounded font-extralight text-gray-400 hover:text-yellow-500">
          coffee
        </span>
      </a>
    </div>
  );
};

export default Footer;
