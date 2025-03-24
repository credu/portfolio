import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface SocialNetwork {
    name: string
    href: string
    Icon: AstroComponentFactory
}