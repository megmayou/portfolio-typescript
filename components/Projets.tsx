// import {
//   CodeBracketSquareIcon,
//   CommandLineIcon,
//   RocketLaunchIcon,
// } from "@heroicons/react/20/solid";
import Image from "next/image";
import streetArtHunter from "@/public/image/street_art_hunter.jpg";
import panClick from "@/public/image/pan'click.jpg";

const Projets = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] ">
      <h1 className="text-center text-white text-[1.5rem] sm:text-[2.5rem] md:text-[3rem] font-bold uppercase ">
        Mes <span className="text-yellow-400">Projets</span>
      </h1>
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white ">
        <article>
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] ">
            <a href="https://npm-code.remote-6.wilders.dev/">
              <Image src={streetArtHunter} alt="page home street art Hunter" />
              {/* <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] " /> */}
              <h2 className="text-[1.5rem] mb:text-[2rem] mt-[1.5rem] mb-[1.5rem]  ">
                Street Art Hunter
              </h2>
              <p className="text-[1rem] text-[#d3d2d2] font-normal  ">
                &quot;Street Art Hunter&quot; est une application web / web
                mobile communautaire de recensement d&apos;art de rue sous forme
                de jeu afin de rendre l&apos;expérience ludique pour
                l&apos;utilisateur.
              </p>
            </a>
          </div>
        </article>
        <article>
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] ">
            <a href="https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-Gridception-P2-LOMASHOW">
              {/* <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] " /> */}
              <h2 className="text-[1.5rem] mb:text-[2rem] mt-[1.5rem] mb-[1.5rem]  ">
                Movinder
              </h2>
              <p className="text-[1rem] text-[#d3d2d2] font-normal  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur culpa mollitia itaque molestias natus, sequi
                cupiditate obcaecati eaque numquam! Ullam sed exercitationem
                eligendi doloremque illo minus tempora itaque. Vitae, aperiam?
              </p>
            </a>
          </div>
        </article>
        <article>
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] ">
            <a href="https://wildcodeschool-2024-02.github.io/JS-RemoteFR-P1-StackQAMP/">
              {" "}
              {/* <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] " /> */}
              <Image src={panClick} alt="page home pan click" />
              <h2 className="text-[1.5rem] mb:text-[2rem] mt-[1.5rem] mb-[1.5rem]  ">
                Pan&apos;Click
              </h2>
              <p className="text-[1rem] text-[#d3d2d2] font-normal  ">
                Premier projet de formation, Pan&apos;Click est un remake du jeu
                bien connu &quot;Cookie Clicker&quot;
              </p>
            </a>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Projets;
