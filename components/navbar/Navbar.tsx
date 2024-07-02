import React from "react";
import navigationLinks from "./NavigationLinks";
import { Bars3Icon } from "@heroicons/react/20/solid";

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <div className="w-full sticky top-0 h-[12vh] bg-[#092635] shadow-md">
      <section className="flex items-center justify-evenly w-full mx-auto h-full">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font bold">
          WEB<span className="text-yellow-400">DEV</span>
        </h1>
        <menu className="hidden md:flex flex-row ">
          {navigationLinks.map((link) => {
            return (
              <li key={link.id} className="nav-link">
                {link.label}
              </li>
            );
          })}
        </menu>
        <button onClick={openNav}>
          <Bars3Icon className="w-[2.5rem] md:hidden h-[2.5rem] cursor-pointer text-yellow-400" />
        </button>
      </section>
    </div>
  );
};

export default Navbar;
