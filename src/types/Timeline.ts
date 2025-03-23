export interface TimelineButtonInterface {
    label: string
    href: string
}

export interface TimelineInterface {
    date: string
    title: string
    description?: string
    buttons?: TimelineButtonInterface[]
}