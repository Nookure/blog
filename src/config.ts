import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.nookure.com/", // replace this with your deployed domain
  author: "Nookure",
  profile: "https://nookure.com",
  desc: "Welcome to Nookure Blog",
  title: "Nookure Blog",
  ogImage: "nookure-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  editPost: {
    url: "https://github.com/Nookure/blog/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Nookure",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:contact@angelillo15.es",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.nookure.com",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
];
