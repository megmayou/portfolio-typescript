import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TechnologiesLanguagesView from "@/components/technologies_languages/section/TechnologiesLanguagesView";

import Javascript from "@/public/image/logos_technologies_languages/javascript_logo.svg";
import Mongo from "@/public/image/logos_technologies_languages/mongodb_logo.svg";
import MySQL from "@/public/image/logos_technologies_languages/mysql_logo.svg";
import NextJS from "@/public/image/logos_technologies_languages/next_js.svg";
import React from "@/public/image/logos_technologies_languages/react_logo.svg";
import Typescript from "@/public/image/logos_technologies_languages/typescript_logo.svg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TechnologiesLanguagesSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <TechnologiesLanguagesView name="Javascript" image={Javascript} />
      <TechnologiesLanguagesView name="Typescript" image={Typescript} />
      <TechnologiesLanguagesView name="React" image={React} />
      <TechnologiesLanguagesView name="Next.js" image={NextJS} />
      <TechnologiesLanguagesView name="MySQL" image={MySQL} />
      <TechnologiesLanguagesView name="MongoDB" image={Mongo} />
    </Carousel>
  );
};

export default TechnologiesLanguagesSlider;
