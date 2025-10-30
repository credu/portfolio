import { type TimelineInterface } from "@/types/Timeline";

export const EXPERIENCES: TimelineInterface[] = [
    {
        date: {
            from: new Date("June 2020"),
            to: new Date("October 2020"),
        },
        title: "Kertin's Fate | Game Developer",
        description: {
            en: "I participated in the development of the video game Kertin's Fate directed by Fausto Zamora using the Godot game engine, where I developed the save system that allows to save the progress at any time and load it later from the main menu or pause, implemented an entire level with its respective final boss including its behavior and attack mechanics, created the behavior of an enemy that interacts with the player taking his life and making him a “knockback” effect, introduced the pause system that allows players to pause the game at any time and resume it later.",
            es: "A mis 15 años participe en el desarrollo de Kertin's Fate dirigido por Fausto Zamora usando el Godot Engine, donde desarrolle y diseñe el menu principal, menu de pausa, sistema de guardado que guarda el progreso del jugador, un nivel entero con su respectivo Jefe final con sus mecanicas y ataques.",
        },
        buttons: [
            {
                label: "Fausto's blog",
                href: "https://fizagameengines.blogspot.com/2020/06/kerstins-fate-developer-diary.html",
            },
        ],
    },
];
