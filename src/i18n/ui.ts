export const languages = {
    en: "English",
    es: "Español",
};

export const defaultLang = "en";

export const ui = {
    en: {
        "nav.home": "Home",
        "nav.projects": "Projects",
        "nav.experience": "Experience",
        "nav.stacks": "Stacks",
        "nav.about-me": "About Me",
        "home.meta.title": "Portfolio | Jesus Mendoza",
        "home.meta.description":
            "Passionate FullStack Developer with expertise in backend, frontend, and DevOps. Skilled in JavaScript, React, Express, Java, Spring Boot, SQL, NoSQL and Docker.",
        "hero.greeting": "Hi, I'm",
        "hero.greeting.name": "Jesus Mendoza",
        "hero.headline": "Fullstack Developer",
        "hero.text":
            "I'm a <b>FullStack Developer</b> with experience in different technologies, focused on developing efficient and scalable solutions. I have experience in <b>backend development</b> with Express, Laravel, and Spring Boot, SQL and NoSQL <b>databases</b>, <b>frontend development</b> with React, and infrastructure implementation with Docker.",
        "hero.button.github": "Github",
        "hero.button.linkedin": "Linkedin",
        "hero.button.resume": "Resume",
        "section.projects": "Projects",
        "section.experience": "Experience",
        "section.education": "Education",
        "section.stacks": "Stacks",
        "section.about-me": "About Me",
        "about-me.content": `
            <p>Hi again, my name is <b>Jesus Mendoza</b>.</p>
            <p>
                I was born on <b>Valentine's Day of 2005</b> in <b>Guayaquil, Ecuador</b
                >. My mom decided that I would be born on <b>February 14</b>. Literally,
                the doctor asked her what day do you want to give birth of this week?
                And she said February 14.
            </p>

            <p>My hobbies are:</p>
            <ul>
                <li>Play video games.</li>
                <li>View technology news.</li>
                <li>Enjoy of cartoons, anime and movies.</li>
                <li>Coding personal projects.</li>
                <li>Learn new things.</li>
            </ul>

            <p>
                I haven't seen many movies, I grew watching YouTube, so currently I like
                to view old movies. For example, I have seen from my list Metal Jacket,
                Shrek, The Longest Yard, Catch Me If You Can and others.
            </p>
        `,
    },
    es: {
        "nav.home": "Inicio",
        "nav.projects": "Proyectos",
        "nav.experience": "Experiencia",
        "nav.about-me": "Sobre mi",
        "home.meta.title": "Portafolio | Jesus Mendoza",
        "home.meta.description":
            "FullStack Developer con experiencia en backend, frontend y DevOps. Especializado en JavaScript, React, Express, Java, Spring Boot, SQL, NoSQL y Docker.",
        "hero.greeting": "Hola, soy",
        "hero.text": `
            <b>Desarrollador FullStack</b> con experiencia en diversas tecnologias,
            enfocado en el desarrollo de soluciones eficientes y escalables.
            Suelo desarrollar <b>Backend </b> con tecnologias como Express, Laravel
            y Spring Boot, junto a <b>Bases de Datos</b> SQL y NoSQL, <b>Frontend</b>
            en React e infrastructuras con Docker.`,
        "hero.button.resume": "Curriculum",
        "section.projects": "Proyectos",
        "section.experience": "Experiencia",
        "section.education": "Educación",
        "section.stacks": "Stacks",
        "section.about-me": "Sobre mi",
        "about-me.content": `
            <p>Hola de nuevo, mi nombre es <b>Jesús Mendoza</b>.</p>
            <p>
                Naci un <b>14 de Febrero del 2005</b> en <b>Guayaquil, Ecuador</b>.
                Exacto en San Valentin, literalmente mi madre lo decidio. El doctor
                le pregunto ¿Que dia quieres dar a luz? y ella dijo el 14 de Febrero.
            </p>

            <p>Cuando no estoy programando suelo:</p>
            <ul>
                <li>Ver noticias de tecnologia.</li>
                <li>Desarrollar proyectos personales.</li>
                <li>Ver cartoons, anime o peliculas.</li>
                <li>Aprender nuevas cosas.</li>
                <li>Jugar Videojuegos.</li>
            </ul>

            <p>
                Creci viendo YouTube por lo que no vi muchas peliculas en mi infancia,
                por lo que suelo disfrutar de peliculas antiguas como Atrapame si puedes,
                Nacido para matar, Shrek, El juego final entre otras.
            </p>
        `,
    },
} as const;
