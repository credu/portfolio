import type { SvgComponent } from "astro/types";

export interface SocialNetwork {
    name: string;
    href: string;
    Icon: SvgComponent;
}
