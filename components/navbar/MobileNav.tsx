import React from "react";
import navigationLinks from "./NavigationLinks";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface Props {
  navBar: boolean;
  closeNav: () => void;
}

const MobileNav = ({ navBar, closeNav }: Props) => {
  const navAnimation = navBar ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <section
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#092635]`}
    >
      <menu
        className="w-[full] h-[full] flex flex-col items-center
      justify-center "
      >
        {navigationLinks.map((link) => {
          return (
            <li key={link.id} className="nav-link">
              {link.label}
            </li>
          );
        })}
      </menu>
      <button
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </button>
    </section>
  );
};

export default MobileNav;
