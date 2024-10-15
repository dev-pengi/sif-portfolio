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
  preview: string;
}
interface ISideProjects {
  name: string;
  description: string;
  link: string;
  github: string;
}
interface IService {
  name: string;
  description: string;
  features: string[];
}

const name: string = "Sifedine";

const hero: Ihero = {
  content: 'Hey there, <span class="text-primary">I\'m sifedine</span>',
  subContent: 'A Software Engineer',
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
    name: "React",
    percentage: 67,
  },
  {
    name: "Next js",
    percentage: 46,
  },
  {
    name: "React native",
    percentage: 30,
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
];











const projects: IProjects[] = [
  {
    name: "T Motion Dev Landing page",
    description: "the landing page for a software development team i created, the idea of the team was to provide software development services, the website is built with next.js, typescript, framer motion, and tailwindcss, the UI was designed be me using figma",
    link: "https://tmotion.sifedine.com",
    github: "https://github.com/dev-pengi/t-motion-dev",
    preview: "/t-motion.png",
  },
  {
    name: "sif player",
    description: "a powerful web based video player that allows you to play local videos or videos from a URL, with advanced user friendly controllers made by me and support for shortcuts, PiP, Playback, loop, themes customization, and many many more, it all works on the client side, no server side is used, this project was made because i couldn't find a video player that meets my needs, so i made one myself!",
    link: "https://player.sifedine.com",
    github: "https://github.com/dev-pengi/sif-player",
    preview: "/sif-player.png",
  },
  {
    name: "sif code",
    description:
      "a web-based editor, that allows you to write html, css, and javascript in just one page and no server side is used, it's a good example of how to use react, nextjs, typescript, iframe sandbox, and monaco editor",
    link: "https://code.sifedine.com",
    github: "https://github.com/dev-pengi/sif-code",
    preview: '/sif-code.png',
  },
  {
    name: "svg blob generator",
    description:
      "a quick useful svg blob shapes generator, cutomize the shape, the color and the size and download it as svg or png",
    link: "https://blob.sifedine.com",
    github: "https://github.com/dev-pengi/svgblob",
    preview: "/blob.png",
  },
  {
    name: "clip-path editor",
    description:
      "css clip-path web editor, you can make, edit, and customize complex css clip-path shapes very easily",
    link: "https://clip.sifedine.com",
    github: "https://github.com/dev-pengi/clip-path",
    preview: "/clip-path.png",
  },
  {
    name: "co med",
    description:
      "Co Med is a platform for both doctors and patients, it allows and helps doctor to manage and view their patients info, including charts, stats, public online reservation profile, This project was my entry for a hackathon that was hosted by ose it",
    link: "https://co-med.org",
    preview: "/co_med.png",
  },
  {
    name: "chatti",
    description:
      "Chatti is an open sourced chat web application that was built by react, nodejs, express, mongoDB and socket.io",
    link: "https://chatti.lol",
    github: "https://github.com/dev-pengi/chatti",
    preview: "/chatti.png",
  },
  {
    name: "ai talk",
    description:
      "ai talk is a chatbot based on artificial intelligence, it uses the open ai api (gpt 3.5) to get the answers, this website is built with nextjs and typescript so it's a good example of how to use nextjs, states, data fetching and typescript",
    link: "https://aitalk.sifedine.com",
    github: "https://github.com/dev-pengi/aitalk",
    preview: "/aitalk.png",
  },
  {
    name: "utils core",
    description:
      "utils-core.js is a powerful JavaScript utility library that provides a wide range of functions to simplify common programming tasks",
    link: "https://utils-core.js.org",
    github: "https://github.com/dev-pengi/utils-core.js",
    preview: "/core-utils-docs.png",
  },
  {
    name: "Rhyno bot dashboard",
    description:
      "Rhyno bot is a verified multipurpose discord bot, i developed the dashboard that is responsible for claiming the rewards, customize the commands in the servers, customize the bot settings and replies",
    link: "https://rhynobot.com",
    preview: "/rhyno.png",
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

const services: IService[] = [
  // this has to be 3 plans no more no less :)
  {
    name: "front end",
    description:
      "build you a website from scratch with all of the modern web requirements",
    features: [
      "Uses the latest web technologies",
      "Fast and optimized web pages",
      "Full responsive web design",
      "Modern and clean design",
      "SEO friendly",
    ],
  },
  {
    name: "back end",
    description: "create robust server-side solutions for web applications",
    features: [
      "Develop RESTful APIs",
      "Handle server-side logic",
      "Integrate with databases",
      "Optimize server performance",
      "Implement 3rd party integrations",
    ],
  },
  {
    name: "custom project",
    description:
      "build you whatever project that matches your needs and requirements",
    features: [
      "full stack applications",
      "tools and automation",
      "server managment",
      "telegram bots",
      "mobile applications (react-native)",
    ],
  },
];

const aboutDescription: string =
  `I am a passionate software engineer from Algeria. My expertise lies in JavaScript and TypeScript, with a strong focus on both client-side(React, Next.js) and backend (Node.js, Express, MongoDB) development. Additionally, I have experience in server hosting and management.

Known for my dedication and enthusiasm, I continuously strive to stay updated with the latest technologies and trends.My natural problem - solving ability and diverse skill set in web development, server management, and publishing make me a valuable asset to any team.`;

const quotes: string[] = [
  "never regret the past, if the action was good it's a memory, if it wasn't then it's a lesson",
  "the future isn't scary, the future isn't joyful. the future is the result of your very moment",
  "if you're not facing problems at what you're doing, you are not evolving you are repeating",
];

const emailjsInfo = {
  templateID: "template_wwub89o",
  serviceID: "service_l6tm9wd",
  publicID: "SuylNGyCgOCrwrP4M",
};

export {
  name,
  emailjsInfo,
  headerItems,
  aboutDescription,
  hero,
  quotes,
  skills,
  projects,
  SideProjects,
  services,
};
