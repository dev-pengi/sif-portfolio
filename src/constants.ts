interface IheaderItem {
  name: string;
  link: string;
}

interface Ihero {
  content: string;
  subContent: string;
  illustration: string;
}
interface ISkills {
  name: string;
  percentage: number;
}

const name: string = "Sifedine";

const hero: Ihero = {
  content: 'Hey there, <span class="text-primary">I\'m sifedine</span>',
  subContent: "and i am a full-stack developer",
  illustration: "https://assets2.lottiefiles.com/packages/lf20_mK7qUzkwYA.json",
};

const headerItems: IheaderItem[] = [
  {
    name: "home",
    link: "#",
  },
  {
    name: "about",
    link: "#about",
  },
  {
    name: "skills",
    link: "#skills",
  },
  {
    name: "projects",
    link: "#projects",
  },
  {
    name: "services",
    link: "#services",
  },
  {
    name: "contact",
    link: "#contact",
  },
];
const skills: ISkills[] = [
  {
    name: "Javascript",
    percentage: 92,
  },
  {
    name: "Typescript",
    percentage: 62,
  },
  {
    name: "Node js",
    percentage: 70,
  },
  {
    name: "Express",
    percentage: 67,
  },
  {
    name: "Mongo DB",
    percentage: 74,
  },
  {
    name: "React",
    percentage: 30,
  },
];

const aboutDescription: string =
  "i'm a young developer from algeria, i use javascript and typescript i code both client side (react, nextjs) and backend (nodejs express and mongodb) and even server hosting and management. i've shown a good level of dedication and perseverance in pursuing my passion for software development. with a natural ability to solve problems and an eagerness to learn, i'm committed to keeping up to date with the latest technology. my diverse skills in web development, server management, and publishing make me an invaluable asset to any team.";

const quotes: string[] = [
  "never regret the past, if the action was good it's a memory, if it wasn't then it's a lesson",
  "the future isn't scary, the future isn't joyful. the future is the result of your very moment",
  "if you're not facing problems at what you're doing, you are not evolving you are repeating",
];

export { name, headerItems, aboutDescription, hero, quotes, skills };
