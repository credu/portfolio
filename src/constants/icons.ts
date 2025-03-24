import { type AstroComponentFactory } from "astro/runtime/server/index.js";

import AnchorIcon from "@/components/icons/AnchorIcon.astro";
import DocumentIcon from "@/components/icons/DocumentIcon.astro";
import GithubIcon from "@/components/icons/GithubIcon.astro";
import GitlabIcon from "@/components/icons/GitlabIcon.astro";
import LinkedinIcon from "@/components/icons/LinkedinIcon.astro";
import WindowIcon from "@/components/icons/WindowIcon.astro";

export const LOCAL_ICONS: Record<string, AstroComponentFactory> = {
    anchor: AnchorIcon,
    deploy: WindowIcon,
    github: GithubIcon,
    gitlab: GitlabIcon,
    linkedin: LinkedinIcon,
    document: DocumentIcon,
};

export const ICONS: Record<string, string> = {
    html: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
    css: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg",
    javascript: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
    astro: "https://svgl.app/library/astro.svg",
    astro_dark: "https://svgl.app/library/astro_dark.svg",
    reactjs: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    tailwindcss: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    java: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    springboot: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
    nodejs: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    mysql: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
    postgresql: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
    mongodb: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    linux: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
    git: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    typescript: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
    jest: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
    docker: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
    postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    godot: "https://www.vectorlogo.zone/logos/godotengine/godotengine-icon.svg",
    h2: "https://www.svgrepo.com/show/499816/database.svg"
};

export const ICONS_NAMES = Object.keys(ICONS) as (keyof typeof ICONS)[];;
export const LOCAL_ICONS_NAMES = Object.keys(LOCAL_ICONS) as (keyof typeof LOCAL_ICONS)[];;
