import { type TimelineInterface } from "@/types/Timeline";

export const EDUCATION: TimelineInterface[] = [
    {
        date: {
            from: new Date("October 2019"),
        },
        title: "Data Science and AI Engineer | University of Guayaquil",
        description: {
            en: "The Data Science and Artificial Intelligence Engineer focuses on the identification, capture, preprocessing, analysis, and visualization of data that allow him/her to solve problems in social, cultural and economic fields through the application of algorithms that allow decision making based on data with minimal human intervention.",
            es: "La carrera de Ciencia de Datos e Inteligencia Artificial esta enfocada en la identificacion, captura, proprocesamiento, analiss y visualizacion de datos  que le permiten resolver problemas en ámbitos sociales, culturales y económicos mediante la aplicación de algoritmos que permitan la toma de decisiones a partir de los datos con una mínima intervención humana.",
        },
        buttons: [
            {
                label: "Syllabus",
                href: "https://drive.google.com/file/d/1Hkg97Ml6UTuBsPtsDEvQaazKpdDyN5qA/view",
            },
            {
                label: "Google Site",
                href: "https://sites.google.com/view/ccidia/inicio",
            },
        ],
    },
    {
        date: {
            from: new Date("July 2023"),
            to: new Date("April 2025"),
        },
        title: "Certified Tech Developer | Digital House",
        description: {
            en: "The certification “Certified Tech Developer” is a two-year course designed by Mercado Libre and Globant together with Digital House, where technical knowledge and fundamental soft skills are obtained.",
            es: "La certificación “Certified Tech Developer” es un curso de dos años diseñado por Mercado Libre y Globant junto a Digital House, donde colabore activamente con compañeros de diferentes paises para desarrollar diferentes proyectos y conoci muchos profesionales.",
        },
        buttons: [
            {
                label: "Syllabus",
                href: "https://assets.digitalhouse.com/content/ar/ctd/CTD_PROGRAMA_PDF.pdf",
            },
            {
                label: "Certification Site",
                href: "https://www.digitalhouse.com/mx/productos/programacion/certified-tech-developer",
            },
        ],
    },
];
