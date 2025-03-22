import { type Project } from "@/types/Project";

import Carato from "@/assets/img/carato.png";
import DrJISmile from "@/assets/img/drjismile.png";
import ICantFuckingDecideBetween from "@/assets/img/i-cant-fucking-decide-between.png";
import KertinFate from "@/assets/img/kertin-fate.png";
import ReactGiftExpert from "@/assets/img/react-gift-expert.png";
import UrlShortener from "@/assets/img/url-shortener.png";

export const PROJECTS: Project[] = [
    {
        title: "Carato",
        description: "The Digital House side project with 8 classmates about a booking system like Airbnb for cars.",
        image: Carato,
        tags: ["JavaScript", "ReactJS", "Java", "Spring Boot", "MySQL", "Docker"],
        links: [
            {
                type: "github",
                href: "https://github.com/dpaeza/carato-frontend-dh"
            },
            {
                type: "gitlab",
                href: "https://gitlab.com/gian-pc/carato-backend"
            },
            {
                type: "deploy",
                href: "https://carato-frontend-dh.vercel.app/"
            }
        ]
    },
    {
        title: "Dr. JISmile",
        description: "Developed by Ivonne Oña (UI Design) and me (coding). Dr. JISmile is a web application designed to facilitate the management of dental practices.",
        image: DrJISmile,
        tags: ["Java", "Spring Boot", "HTML", "JavaScript", "TailwindCSS", "H2"],
        links: [
            {
                href: "https://www.figma.com/proto/zlCBgdoFvXBHfW25LnLqch/Odontologo?node-id=77-2499&node-type=frame&t=xxrI0E2XlXME3EkK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=77%3A2499&hotspot-hints=0"
            },
            {
                type: "github",
                href: "https://github.com/credu/Proyecto-Integrador-Backend-I"
            }
        ]
    },
    {
        title: "Url Shortener",
        description: "Demonstrative project to create short urls based on the attached medium and Midudev's suggestions for portfolio projects.",
        image: UrlShortener,
        tags: ["Java", "Spring Boot", "JavaScript", "ReactJS", "TailwindCSS", "MongoDB"],
        links: [
            {
                href: "https://medium.com/@sandeep4.verma/system-design-scalable-url-shortener-service-like-tinyurl-106f30f23a82"
            },
            {
                type: "github",
                href: "https://github.com/credu/url-shortener"
            }
        ]
    },
    {
        title: "I Can't F*cking Decide Between",
        description: "Developed with @Gualpy inspirited by JustMissAlex's amazing WebApp that works util 2023.",
        image: ICantFuckingDecideBetween,
        tags: ["HTML", "TailwindCSS", "JavaScript"],
        links: [
            {
                href: "https://web.archive.org/web/20230319114147/https://icantfuckingdecide.com/"
            },
            {
                href: "https://medium.com/@justmissalex/i-can-t-fucking-decide-the-dumbest-most-effective-solution-to-your-indecisiveness-293158969af0"
            },
            {
                type: "github",
                href: "https://github.com/credu/I-Cant-Fucking-Decide-Comeback"
            },
            {
                type: "deploy",
                href: "https://credu.github.io/I-Cant-Fucking-Decide-Comeback/"
            }
        ]
    },
    {
        title: "React Gift Expert",
        description: "A react app that serves gifts consuming Gilphy app developed on React Devtalles's course with some modifications.",
        image: ReactGiftExpert,
        tags: ["ReactJS", "JavaScript", "CSS"],
        links: [
            {
                type: "github",
                href: "https://github.com/credu/react-gift-expert",
            },
            {
                type: "deploy",
                href: "https://credu.github.io/react-gift-expert/",
            },
        ]
    },
    {
        title: "Kertin's Fate",
        description: "I participated in the development of the videogame Kertin's Fate using the Godot videogame engine with Fausto Zamora and his friend Pato.",
        image: KertinFate,
        tags: ["Godot"],
        links: [
            {
                href: "https://fizagameengines.blogspot.com/2020/06/kerstins-fate-developer-diary.html"
            }
        ]
    }
]