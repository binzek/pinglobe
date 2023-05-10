import { FC } from "react";

const Footer: FC = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className="mb-2 flex items-end justify-between">
      <div className="ml-3 flex flex-col gap-3">
        <a href="https://github.com/wajid-nv/pinglobe" target="_blank">
          <span className="material-symbols-rounded font-extralight text-light-palette-black duration-100 hover:text-red-600 dark:text-dark-palette-white dark:hover:hover:text-red-600">
            code
          </span>
        </a>
        <a href="https://wajid.me/" target="_blank">
          <span className="material-symbols-rounded font-extralight text-light-palette-black duration-100 hover:text-blue-500 dark:text-dark-palette-white dark:hover:hover:text-blue-500">
            alternate_email
          </span>
        </a>
        <a href="https://buymeacoffee.com/wajidnv/" target="_blank">
          <span className="material-symbols-rounded font-extralight text-light-palette-black duration-100 hover:text-yellow-400 dark:text-dark-palette-white dark:hover:hover:text-yellow-400">
            coffee
          </span>
        </a>
      </div>
      <p className="vertical-text mr-1 -rotate-180 text-sm font-light text-light-palette-black dark:text-dark-palette-white">
        {currentYear} &copy; Abdul Wajid
      </p>
    </div>
  );
};

export default Footer;
