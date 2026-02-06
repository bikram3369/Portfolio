// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import agcLogo from './assets/company_logo/voc.png';


// Education Section Logo's
import College from './assets/education_logo/NIT.png';
import school from './assets/education_logo/school.png';



// Project Section Logo's
import cmLogo from './assets/work_logo/cm.png';
import cmLogo1 from './assets/work_logo/expense.jpg';
import cmLogo2 from './assets/work_logo/lms.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "VaultOfCodes",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
        "MONGODB",
      ],
    },
   
  ];
  
  export const education = [
    // {
    //   id: 0,
    //   img: {},
    //   school: "Still dont know",
    //   date: "Let me complete my UG first :)",
    //   grade: "Let me complete my UG first :)",
    //   desc: "Let me complete my UG first :)",
    //   degree: "Let me complete my UG first :)",
    // },
    {
      id: 1,
      img: College,
      school: "Narula Institute of Technology , Kolkata",
      date: "Sept 2023 - Present",
      grade: "sesh hoyni akhono",
      desc: "I am doing my Bachelor's degree in ECE (B.Tech.) from Narula Institute of Technology , Kolkata. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "B.Tech -  (ECE)",
    },
    {
      id: 2,
      img: school,
      school: "Netaji Shikshayatan, Kolkata",
      date: "Apr 2020 - March 2022",
      grade: "70%",
      desc: "I completed my class 12 education from Netaji Shikshayatan, Kolkata, under the WBCHSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "WBCHSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: school,
      school: "Netaji Shikshayatan, Kolkata",
      date: "Apr 2013 - March 2020",
      grade: "78.5%",
      desc: "I completed my class 10 education from Netaji Shikshayatan, Kolkata, under the WBBSE board, where I studied Science with Computer.",
      degree: "WBBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Job Portal",
      description:
        "A modern and efficient job portal web application designed to bridge the gap between job seekers and employers. The platform allows users to effortlessly create profiles, upload resumes, browse verified job listings, and apply with a single click. Recruiters can post openings, manage applications, and review candidate profiles through an intuitive dashboard. With real-time updates, secure authentication, and a seamless user experience, this job portal simplifies the hiring process and provides a smart, streamlined solution for both candidates and employers.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/bikram3369/JOB-APP/tree/main",
      webapp: "https://job-five-rho.vercel.app",
    },
    {
      id: 1,
      title: "Learning Management System",
      description:
        "The Learning Management System (LMS) is a comprehensive web application designed to streamline the process of online education. It allows educators to create and manage courses, upload learning materials, and track student progress. Students can access course content, submit assignments, and participate in discussions. The platform supports real-time communication between teachers and students, making it an ideal solution for remote learning environments.",
      image: cmLogo2,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/bikram3369/E-learning",
      webapp: "https://e-learning-wj3h.vercel.app/",
    },
    {
      id: 2,
      title: "Expense-Tracker",
      description:
        "The Expense Tracker is a simple and efficient web application designed to help users monitor and manage their daily expenses. It allows users to add, edit, and delete transactions, categorize their spending, and view their financial habits at a glance. The goal of this project is to make budgeting easier by providing a clean interface and real-time balance updates.",
      image: cmLogo1,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/bikram3369/Expense-Tracker",
      webapp: "",
    },
    
  ];  