import {type Technologies} from "./Technology";

export type ProjectLinksType = "github" | "gitlab" | "deploy";

export interface ProjectLinks {
    type?: ProjectLinksType
    href: string
}

export interface Project {
    title: string
    description: string
    image: ImageMetadata
    tags: Technologies[]
    links: ProjectLinks[]
}