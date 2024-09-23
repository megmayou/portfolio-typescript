"use client";
import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";

import { EnvelopeIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  function handleClick() {
    navigator.clipboard
      .writeText("megane.authemayou@hotmail.com")
      .then(function () {
        alert("Email copié !");
      });
  }

  return (
    <section className="h-[88vh] bg-[#092635] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <article>
          <div>
            <h1 className="text-[35px] md:text-[50px] text-white font-bold">
              Bonjour, je suis
              <span className="text-yellow-400"> Mégane! </span>
            </h1>
            <TextEffect />
            <p className="mt-[1.5rem] text-[20px] text-[#ffffff92] ">
              Le métier de développer web me captive. J&apos;apprécie les
              possibilités qu&apos;il offre, pouvoir créer des expériences
              numériques innovantes et me surpasser continuellement. Je suis
              attirée par la dynamique et l&apos;évolution du secteur, qui
              m&apos;incite à apprendre sans cesse et à innover constamment.
            </p>
          </div>

          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 ">
            <button
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[1.5rem] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 "
              id="buttonCopy"
              onClick={handleClick}
            >
              Contactez-moi
              <EnvelopeIcon className="w-[1.6rem] h-[1.7rem] ml-[1rem] " />
            </button>
          </div>
        </article>

        <article className="w-[450px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px] ">
          <Image
            src="/image/avatar.jpg"
            alt="femme"
            width={400}
            height={400}
            className="rounded-[50%] "
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
