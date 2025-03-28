import { type SocialNetwork } from "@/types/SocialNetwork";
import { LOCAL_ICONS } from './icons';

export const SOCIAL_NETWORKS: SocialNetwork[] = [
    {
        name: "Github",
        href: "https://github.com/credu",
        Icon: LOCAL_ICONS.github
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/credu/",
        Icon: LOCAL_ICONS.linkedin
    },
    {
        name: "Resume",
        href: "https://drive.google.com/drive/folders/1aguMbe96FkHrs4S4OvSzVzjXylcNRD66?usp=sharing",
        Icon: LOCAL_ICONS.document
    },
];