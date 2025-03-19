import type { SocialNetwork } from "../types/SocialNetwork";
import GithubIcon from "../assets/svg/github.svg"
import LinkedinIcon from '../assets/svg/linkedin.svg';

export const SOCIAL_NETWORKS: SocialNetwork[] = [
    {
        name: "Github",
        href: "https://github.com/credu",
        icon: GithubIcon.src
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/credu/",
        icon: LinkedinIcon.src
    },
];