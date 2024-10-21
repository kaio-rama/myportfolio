import { InlineCode } from "@/once-ui/components";
import Link from "next/link";

const person = {
    firstName: 'Ramiro',
    lastName:  'Canevari',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full Stack Developer | Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/Madrid',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna' 
    languages: ['English', 'Español']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/kaio-rama',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/ramacanevari',
    },
    {
        name: 'Curriculum Vitae',
        icon: 'pdf',
        link: 'https://drive.google.com/file/d/1sKpxZMX75ZgK6r42fYRX5Qa9_Sb9aYEr/view',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:ramacanevari1@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Ingeniero de Software & <br/> Full Stack Developer</>,
    subline: <>Soy Ramiro Canevari, ingeniero de software, técnico audiovisual y full stack developer, cofundador de
    <InlineCode><Link href="https://vimeo.com/ramacanevari" target="_blank">Londo Labs</Link></InlineCode>, una productora audiovisual que ofrece también servicios de branding y diseño tecnológico para empresas.
    Cuando sobra el tiempo, también soy un artista visual & audiovisual.</> 
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: '#'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Desarrollador con sólida experiencia en frontend, especializado en tecnologías como JavaScript, React, jQuery, Next.js, Webpack y CSS (& SASS), lo que me permite crear interfaces de usuario modernas y eficientes. Mi pasión por el diseño garantiza que mis soluciones no solo sean funcionales, sino también visualmente atractivas. Además, tengo experiencia en backend con herramientas como Node.js, Python y PHP, lo que me permite abordar proyectos de manera integral.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Trayecto Profesional', 
        experiences: [
            {
                company: 'Londo',
                timeframe: '2022 - Presente',
                role: 'CEO & Productor | Full Stack Developer',
                achievements: [
                    
                    <>Captación de nuevos clientes y gestión de proyectos. Toma de desiciones para la mejora de los servicios y una mayor calidad para la experiencia de los clientes.</>,
                    <>Diseño de interfaz de usuario para multiples clientes e implementación de las tecnologías de backend y frontend (React, Next.js, Node.js). Desarrollo de nuevas funcionalidades y mejoras de las plataformas.</>,
                    
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/londo-landing-page.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/londo logo big.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Freelance',
                timeframe: '2019 - presente',
                role: 'Web Design & Frontend Developer',
                achievements: [
                    <>Diseñé y desarrollé landing pages y portafolios web para pequeñas empresas y profesionales independientes.</>,
                    <>Implementé soluciones web personalizadas utilizando HTML5, CSS3,
                    JavaScript y frameworks como jQuery y Bootstrap, logrando mejorar la
                    presencia en línea de los clientes.</>,
                ],
                images: [
                    {
                        src: '/images/projects/project-01/Gimnasio 1.gif',
                        alt: 'Proyecto para un Gimnasio',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/pic-1.jpg',
                        alt: 'SUBSUELO - Proyecto de comunicación multimedia',
                        width: 16,
                        height: 9
                    },
                 ]
            },
            {
                company: 'Visión Clara',
                timeframe: '2023 - 2024',
                role: 'App Mobile Developer & Frontend Designer',
                achievements: [
                    <>Diseño de una interfaz de usuario, y de administrador, para una plataforma SaaS de control y gestión de consultorios, clinicas y centros de salud utilizando React y Next.js.</>,
                    <>Desarrollo de una aplicación de gestión de clientes para una empresa de consultorios.</>,
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Universidad Nacional de Córdoba',
                description: <>Técnico en Producción Audiovisual.</>,
            },
            {
                name: 'Universidad de Sarmiento',
                description: <>Ingeniería en Sistemas y Tecnologías de la Información.</>,
            },
            {
                name: 'Harvard University',
                description: <>CS50's Introduction to Computer Science.</>,
            },
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'JavaScript & TypeScript',
                description: <>Conocimientos avanzados de JavaScript y TypeScript. Control de flujo, funciones, closures, etc. Manejo de DOM, Eventos, AJAX y Fetch entre otras.</>,
                images: [
                    // {
                    //     src: '/images/projects/project-01/cover-02.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                    // {
                    //     src: '/images/projects/project-01/cover-03.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                ]
            },
            {
                title: 'React, React Native & Next.js',
                description: <>Progracmación de aplicaciones web con React y frameworks como Next.js. Creación de aplicaciones nativas con React Native.</>,
                images: []
            },
            {
                title: 'Node.js',
                description: <>Estructura de aplicaciones con Node.js. Manejo de bases de datos con MongoDB, PostgreSQL, MySQL, entre otras. Integración de APIs con Express, Fastify, NestJS, etc.</>,
                images: []
            },
            {
                title: 'Otras tecnologías',
                description: <> Conocimientos básicos de otros lenguajes como Python, PHP, C# y C++. Control de versiones con Git y GitHub. Integración de sistemas con Docker y Kubernetes. Manejo avanzados de librerias como Astro, Bootstrap, Tailwind, SASS, Material UI, etc.</>,
                images: []
            },
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/Gimnasio 1.gif', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/wtb.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/wtb-mobile.png', 
            alt: 'image',
            orientation: 'vertical',
        },
        { 
            src: '/images/gallery/masto-mobi.png', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/masto.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/DBD-1.png', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/naruto.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/pic-1.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/pic-2.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/londo-landing-page.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/DBD-2.png', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/visionclara.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };