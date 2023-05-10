import { FC } from "react";

const Footer: FC = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center gap-2 bg-light-palette-gray pb-1 pt-3 font-inter text-sm text-light-palette-black dark:bg-dark-palette-gray dark:text-dark-palette-white">
      <div className="flex gap-4">
        <a href="https://github.com/wajid-nv/pinglobe" target="_blank">
          <span className="material-symbols-rounded font-extralight">code</span>
        </a>
        <a href="https://wajid.me/" target="_blank">
          <span className="material-symbols-rounded font-extralight">
            alternate_email
          </span>
        </a>
        <a href="https://buymeacoffee.com/wajidnv/" target="_blank">
          <span className="material-symbols-rounded font-extralight">
            coffee
          </span>
        </a>
      </div>
      <p className="font-light">{currentYear} &copy; Abdul Wajid</p>
    </div>
  );
};

export default Footer;
