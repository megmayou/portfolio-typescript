type Link = {
  id: number;
  label: string;
  link: string;
};

const navigationLinks: Array<Link> = [
  {
    id: 1,
    label: "Accueil",
    link: "",
  },
  {
    id: 2,
    label: "Projets",
    link: "projets",
  },
  {
    id: 3,
    label: "Technologies",
    link: "technologies_languages",
  },
  {
    id: 4,
    label: "Formations",
    link: "skills",
  },
];

export default navigationLinks;
