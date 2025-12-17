// src/static/about.ts

export const aboutData = {
    name: "Mohammed Morshed",
    location: "Chattogram, Bangladesh",
    title: "MERN Stack Developer",
    image: "/myImage.jpg",
    bio: [
        "Hi!I am Mohammed Morshed from Chattogram,Bangladesh.I am a MERN Stack Developer and i can build user friendly websites,based on user comfortablity.I am also a Frontend Developer,obviously skilled in Javascript, React,TailwindCSS,Vanilla CSS and others which needed i can apply into site.",
        "My persistent and selfmotivate skills and behaviour help me to stay focused on my work and projects until it complete.My positive thinking,solving skills and other interpersonal skills help me to get rid of any trouble situation.",
        "I hope this introduction give you a good overview about me as a developer and person,and i am eagerly excited and strongly ready for the upcoming challenge.I am eagerly ready for taking the challenge from your side also and want to blend my passionate skills in your projects!",
        "If you have any further questions or would like to discuss potential opportunities, please feel free to reach out. I am excited about the possibility of working together. Have a great day! Thank you."
    ],
    skills: [
        "JavaScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "TailwindCSS",
        "TypeScript",
        "Prisma",
        "JWT",
        "Git/GitHub",
        "REST API",
    ],
    education: [
        {
            year: "2019 - 2025",
            institute: "Omargani M.E.S. University College",
            degree: "Bachelor of Business Administration",
        },
        {
            year: "2016 - 2018",
            institute: "Hathazari University College",
            degree: "Higher Secondary Certificate (Intermediate)",
        },
        {
            year: "2011 - 2016",
            institute: "Madarsha Adarsha High School",
            degree: "Secondary School Certificate",
        },
    ],
    experience: [
        {
            year: "August 2024 - May 2025",
            company: "Spands SPS",
            position: "Junior Frontend Developer",
            companyLink: "https://diasporex.io/",
            description:
                "Spands SPS is a UK-based startup where I worked on multiple projects including Diasporex, Eventick, and QuizNPop. I gained experience working in a collaborative commercial environment, learned teamwork and project workflow, and contributed to the main product Diasporex—a money transfer web application.",
        },
        {
            year: "February 2024 - June 2024",
            company: "ABM Global Limited",
            position: "MERN Stack Developer",
            companyLink: "https://abmgloballtd.com/",
            description:
                "ABM Global Limited was my first startup experience. I worked on POS-related projects with a small team of three developers, handling both development and deployment tasks. It gave me valuable hands-on commercial experience and insight into real-world product cycles.",
        },
    ],
} as const;
