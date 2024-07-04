import React from "react";
import Image from "next/image";

import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const About = () => {
  return (
    <section className=" bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem] ">
      <div className="grid grid-cols-1 md:grif-cols-2 w-[80%] mx-auto gap-[3rem] items-center  ">
        <article>
          <h1 className="text-[1.2rem] font-bold uppercase text-[#55e6a5] mb-[1rem] ">
            About me
          </h1>
          <h2 className=" text-[1.7rem] md:text-[2.2rem] lg:text-[2.8rem] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white ">
            Transforming <span className="text-yellow-400 ">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10 ">
            <span className="w-[6.2rem] hidden md:block h-[5px bg-slate-400 rounded-sm "></span>
            <p className="text-[1.2rem] text-slate-300 w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut,
              aperiam eveniet natus, fuga officia impedit veniam architecto eum
              neque ad. Explicabo voluptatem, qui quis debitis laboriosam natus
              quidem deserunt!
            </p>
          </div>
          <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[1.5rem] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 ">
            Download Cv
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] " />
          </button>
        </article>
        <article className="lg:w-[31.2rem] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[31.2rem] w-[18.7rem] h-[18.7rem] relative ">
          <Image
            src=""
            alt=""
            width={400}
            height={400}
            objectFit="contain"
            className="relative z-[11] w-full object-contain "
          />
          <div className="absolute w-full h-full z-[10] bg-[#55E65] top-[-2rem] right-[-2rem] "></div>
        </article>
      </div>
    </section>
  );
};

export default About;
