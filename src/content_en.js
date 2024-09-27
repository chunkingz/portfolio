const logoText = "KING";
const meta = {
    title: "Fortune King's Portfolio",
    description: "I'm Fortune King a Full stack developer, currently working in the USA",
};

const introData = {
    title: "I'm Fortune King 🤓",
    // animated: {
    //     first: "I love coding",
    //     second: "I code cool websites",
    //     third: "I develop mobile apps",
    // },
    animated: [
        "I love coding 🚀",
        "I code cool websites 😍",
        "I develop mobile apps 📱",
        "I am also very much into Cyber Security and DevOps 👨‍💻",
        "I love collaborating on open source tools"
    ],
    description: "I'm Fortune King a Full stack developer, currently working in the USA 🇺🇸",
    imgUrl: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataAbout = {
    title: "A bit about my self",
    aboutMe: "Experienced Software Developer, with Computer Science background, always finding better solutions to problems and also a writer of clean code.",
};
const education = [
    {
        major: "Master's Degree",
        school: "MIU",
        date: "2023 - Present",
    },
    {
        major: "Bachelor's Degree",
        school: "FUPRE",
        date: "2012 - 2016",
    },
];
const workTimeline = [
    {
        jobTitle: "Full stack developer",
        where: "Bayer",
        date: "2023",
    },
    {
        jobTitle: "Full stack developer",
        where: "Integration Consulting Group",
        date: "2021",
    },
    {
        jobTitle: "Full stack developer",
        where: "Archimydes",
        date: "2020",
    },
];

const skills = [{
        name: "Javascript/Typescript",
        value: 90,
    },
    {
        name: "Node.js",
        value: 85,
    },
    {
        name: "Java",
        value: 70,
    },
    {
        name: "React",
        value: 85,
    },
    {
        name: "Angular",
        value: 83,
    },
    {
        name: "SQL",
        value: 80,
    },
    {
        name: "Cloud (AWS)",
        value: 75,
    },
];

const services = [{
        title: "Full stack app design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile App development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "DevOps and Cloud",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataPortfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "kingstonfortune@gmail.com",
    YOUR_FONE: "(555)123-4567",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialProfiles = {
    github: "https://github.com/chunkingz",
    facebook: "https://facebook.com/",
    linkedin: "https://www.linkedin.com/in/fortune-king/",
    twitter: "https://x.com",
};
export {
    meta,
    dataAbout,
    dataPortfolio,
    education,
    workTimeline,
    skills,
    services,
    introData,
    contactConfig,
    socialProfiles,
    logoText,
};