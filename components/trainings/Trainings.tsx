import React from "react";

import TrainingsItem from "@/components/trainings/section/TrainingsItem";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] ">
      <h1 className="text-center text-white text-[1.5rem] sm:text-[2.5rem] md:text-[3rem] font-bold uppercase">
        Formations & <span className="text-yellow-400">Diplômes</span>
      </h1>
      <section className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center ">
        <article>
          <TrainingsItem
            title="Titre professionnel Développeur web et web mobile"
            year="Février 2024 - Juillet 2024"
            degree="Obtenue 2024"
          />
          <TrainingsItem
            title="Master 1 Gestion et Finance en alternance"
            year="2021 - 2022"
            degree="Niveau"
          />
        </article>
        <article>
          <TrainingsItem
            title="Bachelor Conseillé RH en alternance"
            year="2020 - 2021"
            degree="Obtenue 2021"
          />
          <TrainingsItem
            title="BTS Gestion de la PME en alternance"
            year="2019 - 2020"
            degree="Obtenue 2020"
          />
        </article>
      </section>
    </div>
  );
};

export default Skills;
