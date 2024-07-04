import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Développeuse Web",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Front-end",
        1500,
        "Partie back-end",
        1500,
        "Pour participer à votre projet",
        1500,
      ]}
      wrapper="span"
      speed={50}
      className="text-[1.5rem] md:text-[2rem] text-[#55e6a5] font-bold "
      repeat={Infinity}
    />
  );
};

export default TextEffect;
