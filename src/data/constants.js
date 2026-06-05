import {
    FaGithub, FaLinkedin, FaTwitter,
    FaReact, FaNodeJs, FaHtml5, FaJs, FaAws, FaBootstrap,
    FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaDocker, FaDatabase, FaServer, FaTools, FaCogs, FaImage
} from 'react-icons/fa';
import {
    SiTypescript, SiTailwindcss, SiNextdotjs,
    SiMongodb, SiExpress, SiSupabase, SiJsonwebtokens, SiMui
} from 'react-icons/si';

export const SOCIAL_LINKS = [
    { id: 1, icon: FaGithub, url: "https://github.com/umerakhlaq", label: "GitHub" },
    { id: 2, icon: FaLinkedin, url: "https://www.linkedin.com/in/umer-akhlaq-3b925a342/", label: "LinkedIn" },
    { id: 3, icon: FaTwitter, url: "https://twitter.com/umerakhlaq", label: "Twitter" },
];

export const NAV_LINKS = [
    { name: "Home", to: "home", icon: FaHome },
    { name: "About", to: "about", icon: FaUser },
    { name: "Skills", to: "skills", icon: FaCode },
    { name: "Projects", to: "projects", icon: FaBriefcase },
    // { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact", icon: FaEnvelope },
];

export const HERO_CONTENT = {
    greeting: "Hello, I'm",
    name: "Muhammad Umer",
    roles: ["Full Stack Developer", "MERN Stack Developer", "React Specialist", "Problem Solver"],
    tagline: "Building scalable, high-performance web applications with modern technologies.",
    emailLink: "https://mail.google.com/mail/u/0/?fs=1&to=umerakhlaq2008@gmail.com&tf=cm", // Placeholder
};

export const ABOUT_CONTENT = {
    bio: "I am a passionate Senior Full Stack Developer with over 5 years of experience in building enterprise-level applications. I specialize in the MERN stack and modern frontend technologies. My goal is to create digital experiences that are not only visually stunning but also highly functional and performant.",
    stats: [
        { label: "Years Experience", value: "1+" },
        { label: "Projects Completed", value: "50+" },
        { label: "Technologies", value: "10+" },
    ],
    details: {
        location: "Pakistan",
        email: "umerakhlaq2008@gmail.com",
        availability: "Open for opportunities",
    }
};

export const SKILLS = [
    // Frontend
    { name: "React.js", icon: FaReact, category: "Frontend" },
    { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
    { name: "JavaScript (ES6+)", icon: FaJs, category: "Frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
    { name: "HTML5 & CSS3", icon: FaHtml5, category: "Frontend" },

    // Backend
    { name: "Node.js", icon: FaNodeJs, category: "Backend" },
    { name: "Express.js", icon: SiExpress, category: "Backend" },
    { name: "REST API Development", icon: FaCode, category: "Backend" },
    { name: "JWT Authentication", icon: SiJsonwebtokens, category: "Backend" },
    { name: "API Integration", icon: FaServer, category: "Backend" },

    // Database & Cloud
    { name: "MongoDB", icon: SiMongodb, category: "Database" },
    { name: "Supabase", icon: SiSupabase, category: "Database" },
    { name: "Cloudinary", icon: FaImage, category: "Database" },
    { name: "Docker", icon: FaDocker, category: "Database" },

    // Deployment & Tools
    { name: "Vercel", icon: FaAws, category: "Deployment & Tools" },
    { name: "Railway", icon: FaServer, category: "Deployment & Tools" },
    { name: "Git & GitHub", icon: FaGithub, category: "Deployment & Tools" },
    { name: "Postman", icon: FaTools, category: "Deployment & Tools" },
    { name: "VS Code", icon: FaCode, category: "Deployment & Tools" },
];


export const PROJECTS = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured online store with payment integration and admin dashboard.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        category: "Full Stack",
        image: "../public/ecommerce.jpg", // Placeholder
        demo: "https://full-stack-ecommerce-gilt.vercel.app/",
        github: "https://github.com/umerakhlaq/FullStack-Ecommerce"
    },
    {
        id: 2,
        title: "AI Clinic",
        description: "AI Clinic is a revolutionary platform designed to empower entrepreneurs and innovators by generating high-quality, professional business pitches instantly. Leveraging advanced artificial intelligence, AI Clinic transforms your ideas into compelling narratives, complete with market analysis, financial projections, and investor-ready presentation slides.",
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
        category: "React",
        image: "../public/aiclinic.jpg",
        demo: "https://final-hackathon-g5d6.vercel.app/",
        github: "https://github.com/umerakhlaq/Final_Hackathon"
    },
    {
        id: 3,
        title: "PitchCraft AI",
        description: "PitchCraft AI is a revolutionary platform designed to empower entrepreneurs and innovators by generating high-quality, professional business pitches instantly. Leveraging advanced artificial intelligence, PitchCraft AI transforms your ideas into compelling narratives, complete with market analysis, financial projections, and investor-ready presentation slides.",
        tech: ["React", "Tailwind", "Framer Motion" , "Supabase"],
        category: "UI",
        image: "../public/pitchcraft.png",
        demo: "https://mini-hackathon-umer.netlify.app/",
        github: "https://github.com/umerakhlaq/mini-hackathon"
    }
];

export const SERVICES = [
    {
        id: 1,
        title: "Web Development",
        description: "Building modern, responsive, and robust websites tailored to your needs.",
        icon: FaHtml5
    },
    {
        id: 2,
        title: "Frontend Development",
        description: "Creating engaging and interactive user interfaces using the latest frameworks.",
        icon: FaReact
    },
    {
        id: 3,
        title: "Backend Development",
        description: "Developing scalable and secure server-side logic and APIs.",
        icon: FaNodeJs
    },
    {
        id: 4,
        title: "Performance Optimization",
        description: "Improving website speed, accessibility, and overall performance.",
        icon: SiNextdotjs // Using Next.js icon as a proxy for performance
    }
];

export const TESTIMONIALS = [
    {
        id: 1,
        name: "John Doe",
        role: "CEO",
        company: "Tech Corp",
        quote: "Umer delivers exceptional quality code and is a pleasure to work with.",
        image: "https://via.placeholder.com/100"
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Product Manager",
        company: "Design Studio",
        quote: "The attention to detail in the UI was impressive. Highly recommended!",
        image: "https://via.placeholder.com/100"
    },
    {
        id: 3,
        name: "Mike Johnson",
        role: "CTO",
        company: "Startup X",
        quote: "Great problem solver and fast turnaround on complex features.",
        image: "https://via.placeholder.com/100"
    }
];
