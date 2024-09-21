import About from "@/components/About";
import Hero from "@/components/Hero";
import MobileNav from "@/components/navbar/MobileNav";
import Navbar from "@/components/navbar/Navbar";
import Projets from "@/components/Projets";
import Skills from "@/components/skills/Skills";

import React, { useState } from "react";

const HomePage = () => {
  const [navBar, setNavBar] = useState(false);
  const openNav = () => setNavBar(true);
  const closeNav = () => setNavBar(false);

  return (
    <div className="overflow-x-hidden">
      <section>
        <article>
          <MobileNav navBar={navBar} closeNav={closeNav} />
          <Navbar openNav={openNav} />
          <Hero />
        </article>
        <article className="relative z-[30] ">
          <About />
          <Projets />
          <Skills />
        </article>
      </section>
    </div>
  );
};

export default HomePage;
