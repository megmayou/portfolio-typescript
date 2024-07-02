import Navbar from "@/components/navbar/Navbar";
import MobileNav from "@/components/navbar/MobileNav";
import Hero from "@/components/Hero";

import React, { useState } from "react";

const HomePage = () => {
  const [navBar, setNavBar] = useState(false);
  const openNav = () => setNavBar(true);
  const closeNav = () => setNavBar(false);

  return (
    <div className="overflow-x-hidden">
      <section>
        <MobileNav navBar={navBar} closeNav={closeNav} />
        <Navbar openNav={openNav} />
        <Hero />
      </section>
    </div>
  );
};

export default HomePage;
