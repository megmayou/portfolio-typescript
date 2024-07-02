import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[88vh]  bg-[#092635] bg-cover bg-center">
      <Particle />
      <article className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Bonjour, je suis <span className="text-yellow-400"> Mégane! </span>
          </h1>
          <TextEffect />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            esse, quo incidunt perferendis non molestiae in repellat excepturi
            repellendus quis, omnis deserunt itaque optio necessitatibus, enim
            ratione commodi. Quod, obcaecati?
          </p>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full ">
          <Image
            src="/assets/avatar"
            alt="femme"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </article>
    </section>
  );
};

export default Hero;
