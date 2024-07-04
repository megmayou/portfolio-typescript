import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";

const Projets = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] ">
      <h1 className="text-center text-white text-[1.5rem] sm:text-[2.5rem] md:text-[3rem] font-bold uppercase ">
        My <span className="text-yellow-400">Services</span>
      </h1>
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white ">
        <article>
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] ">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] " />
            <h2 className="text-[1.5rem] mb:text-[2rem] mt-[1.5rem] mb-[1.5rem]  ">
              Frontend
            </h2>
            <p className="text-[1rem] text-[#d3d2d2] font-normal  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur culpa mollitia itaque molestias natus, sequi
              cupiditate obcaecati eaque numquam! Ullam sed exercitationem
              eligendi doloremque illo minus tempora itaque. Vitae, aperiam?
            </p>
          </div>
        </article>
        <article>
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] ">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] " />
            <h2 className="text-[1.5rem] mb:text-[2rem] mt-[1.5rem] mb-[1.5rem]  ">
              Frontend
            </h2>
            <p className="text-[1rem] text-[#d3d2d2] font-normal  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur culpa mollitia itaque molestias natus, sequi
              cupiditate obcaecati eaque numquam! Ullam sed exercitationem
              eligendi doloremque illo minus tempora itaque. Vitae, aperiam?
            </p>
          </div>
        </article>
        <article>
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] ">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8] " />
            <h2 className="text-[1.5rem] mb:text-[2rem] mt-[1.5rem] mb-[1.5rem]  ">
              Frontend
            </h2>
            <p className="text-[1rem] text-[#d3d2d2] font-normal  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur culpa mollitia itaque molestias natus, sequi
              cupiditate obcaecati eaque numquam! Ullam sed exercitationem
              eligendi doloremque illo minus tempora itaque. Vitae, aperiam?
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Projets;
