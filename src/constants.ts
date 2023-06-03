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
interface IProjects {
  name: string;
  description: string;
  link: string;
  github?: string;
  preview: StaticImageData;
}
interface ISideProjects {
  name: string;
  description: string;
  link: string;
  github: string;
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

import CoMedPreview from "../public/projects/co_med.png";
import ChattiPreviw from "../public/projects/chatti.png";
import coreUtilsPreviw from "../public/projects/core-utils-docs.png";
import rhynoPreviw from "../public/projects/rhyno.png";
import aitalkPreviw from "../public/projects/aitalk.png";
import { StaticImageData } from "next/image";

const projects: IProjects[] = [
  {
    name: "co med",
    description:
      "Co Med is a platform for both doctors and patients, it allows and helps doctor to manage and view their patients info, including charts, stats, public online reservation profile, This project was my entry for a hackathon that was hosted by ose it",
    link: "https://co-med.org",
    preview: CoMedPreview,
  },
  {
    name: "chatti",
    description:
      "Chatti is an open sourced chat web application that was built by react, nodejs, express, mongoDB and socket.io",
    link: "https://chatti.lol",
    github: "https://github.com/dev-pengi/chatti",
    preview: ChattiPreviw,
  },
  {
    name: "ai talk",
    description:
      "ai talk is a chatbot based on artificial intelligence, it uses the open ai api (gpt 3.5) to get the answers, this website is built with nextjs and typescript so it's a good example of how to use nextjs, states, data fetching and typescript",
    link: "https://aitalk.sifedine.lol",
    github: "https://github.com/dev-pengi/aitalk",
    preview: aitalkPreviw,
  },
  {
    name: "utils core",
    description:
      "utils-core.js is a powerful JavaScript utility library that provides a wide range of functions to simplify common programming tasks",
    link: "https://utils-core.js.org",
    github: "https://github.com/dev-pengi/core-utils.js",
    preview: coreUtilsPreviw,
  },
  {
    name: "Rhyno bot dashboard",
    description:
      "Rhyno bot is a verified multipurpose discord bot, i developed the dashboard that is responsible for claiming the rewards, customize the commands in the servers, customize the bot settings and replies",
    link: "https://rhynobot.com",
    preview: rhynoPreviw,
  },
];

const SideProjects: ISideProjects[] = [
  {
    name: "snowflake-uid",
    description:
      "snowflake-uid is a simple npm module to generate unique snowflake IDs based on the snowflake algorithm",
    link: "https://www.npmjs.com/package/snowflake-uid",
    github: "https://github.com/dev-pengi/snowflake-uid",
  },
  {
    name: "music-bot",
    description:
      "an open sourced discord music bot, built with nodejs and typescript, it uses discord.js for interacting with the discord API and discord-player framework for the music futures",
    link: "https://github.com/dev-pengi/music-bot",
    github: "https://github.com/dev-pengi/music-bot",
  },
  {
    name: "mark-parse",
    description:
      "Mark parse is a JavaScript module that allows you to parse Markdown text and convert it into a plain HTML.",
    link: "https://www.npmjs.com/package/mark-parse",
    github: "https://github.com/dev-pengi/mark-parse",
  },
  {
    name: "dominated-color",
    description:
      "dominated-color is a simple module that allows you to detect the dominant color of an image using the node-vibrant package.",
    link: "https://www.npmjs.com/package/dominated-color",
    github: "https://github.com/dev-pengi/dominated-color",
  },
];

const aboutDescription: string =
  "i'm a young developer from algeria, i use javascript and typescript i code both client side (react, nextjs) and backend (nodejs express and mongodb) and even server hosting and management. i've shown a good level of dedication and perseverance in pursuing my passion for software development. with a natural ability to solve problems and an eagerness to learn, i'm committed to keeping up to date with the latest technology. my diverse skills in web development, server management, and publishing make me an invaluable asset to any team.";

const quotes: string[] = [
  "never regret the past, if the action was good it's a memory, if it wasn't then it's a lesson",
  "the future isn't scary, the future isn't joyful. the future is the result of your very moment",
  "if you're not facing problems at what you're doing, you are not evolving you are repeating",
];

export {
  name,
  headerItems,
  aboutDescription,
  hero,
  quotes,
  projects,
  SideProjects,
  skills,
};
