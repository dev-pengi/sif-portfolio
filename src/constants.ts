interface IheaderItem {
  name: string;
  link: string;
}

interface Ihero {
  content: string;
  subContent: string;
  illustration: string;
}

const name: string = "Sifedine";

const hero: Ihero = {
  content: 'Hey there, <span class="text-primary">I\'m sifedine</span>',
  subContent: "and i am a full-stack developer",
  illustration: "https://assets2.lottiefiles.com/packages/lf20_mK7qUzkwYA.json",
};

const headerItems: IheaderItem[] = [
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

export { name, headerItems, hero };
