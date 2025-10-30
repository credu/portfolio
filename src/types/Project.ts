import { type Lang } from "@/i18n/utils";
import {type Technologies} from "./Technology";

export type ProjectLinksType = "github" | "gitlab" | "deploy";
export type ProjectDescription = Record<Lang, string>

export interface ProjectLinks {
    type?: ProjectLinksType
    href: string
}

export interface Project {
    title: string
    description: ProjectDescription
    image: ImageMetadata
    tags: Technologies[]
    links: ProjectLinks[]
}