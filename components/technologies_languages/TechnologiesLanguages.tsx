import TechnologiesLanguagesSlider from "@/components/technologies_languages/section/TechnologiesLanguagesSlider";

const TechnologiesLanguages = () => {
  return (
    <section
      className="bg-[#09101a] pt-[4rem] md:pt-[8rem] "
      id="technologies_languages"
    >
      <h1 className="text-center text-white text-[1.5rem] sm:text-[2.5rem] md:text-[3rem] font-bold uppercase">
        Technologies & <span className="text-yellow-400">Languages</span>
      </h1>
      <TechnologiesLanguagesSlider />
    </section>
  );
};

export default TechnologiesLanguages;
