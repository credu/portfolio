import type { Lang } from "@/i18n/utils";

export interface TimelineDateInterface {
    from: Date;
    to?: Date;
}

export interface TimelineButtonInterface {
    label: string;
    href: string;
}

export interface TimelineInterface {
    date: TimelineDateInterface;
    title: string;
    description?: Record<Lang, string>;
    buttons?: TimelineButtonInterface[];
}
