import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
}
const TechnologiesLanguagesView = ({ name, image }: Props) => {
  return (
    <article className="flex flex-col text-center justify-center h-[15rem] ">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        objectFit="contain"
        className="mx-auto mb-[2rem] rounded-full h-[6rem] "
      />
      <h1 className="text-[25px] text-white mt-[1rem] ">{name}</h1>
    </article>
  );
};

export default TechnologiesLanguagesView;
