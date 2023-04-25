import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    waste,
    bookstore,
    iftach,
    ruparel,
    threejs,
    disney,
    facebook
  } from "../assets";
  import {hospital} from "../assets"
  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
    {
      name: "docker",
      icon: docker,
    },
  ];

  // Also add I 'm efficient in java javascript,python programming languages,database like Mongo DB,Sql and familiarity with Microsoft azure and angular
  
  const experiences = [
    {
      title: "Full Stack Web Developer Intern",
      company_name: "The Iftach Group,New York City,New York",
      icon: iftach,
      iconBg: "#383E56",
      date: "Jul 2022 - Nov 2022",
      points: [
        "Developed a social/gamified crowd-funding platform connecting founders and investors with startups using the MERN stack",
        "Designed and implemented back-end database development using Node.js and MongoDB and UI maintenance using ReactJs with the NextJs framework",
        "Created and maintained APIs for community event registration feature, including developing, testing, and integrating RESTful APIs",
        "Collaborated with other developers using version control systems like Git and GitHub to ensure the codebase was always up-to-date",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Optimized the debugging process by collaborating closely with the testing team, resulting in a 9% improvement in system performance"

        
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Ruparel Computers, Pvt Ltd,Mumbai",
       icon: ruparel,
      iconBg: "#E6DEDD",
      date: "May 2020 - Mar 2021",
      points: [
        "Developed and maintained a Java-based application for the Brihanmumbai Municipal Corporation",
        "Designed and implemented scalable REST APIs using Spring Boot following a micro-services architecture, reducing the response time of the application by 20%",
        "Created UI components using HTML, CSS, and JavaScript, resulting in a 10% increase in user engagement"
      ],
    },
    
    
  ];
  
  
  
  const projects = [
    {
      name: "Hospital Management System",
      description:
        "Developed a full-stack website using Node.js, Express.js, MongoDB, and Ajax for a hospital management system, enabling patients to book appointments, update their information, and receive confirmation emails",
      tags: [
        {
          name: "node",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "ajax",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
      ],
      image: hospital,
      source_code_link: "https://github.com/darshil1899/group13_cs546C_project",
    },
    {
      name: "Smart City Waste Management System",
      description:
        "Developed a waste management system using the ARIMA model, which analyzes historical data and predicts the time when the bin will get filled each day, optimizing the waste collection process and reducing costs",
        tags:[
          {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "algorithms",
          color: "green-text-gradient",
        },
        {
          name: "BFS",
          color: "pink-text-gradient",
        },
        {
          name: "DFS",
          color: "blue-text-gradient",
        },
        
        {
          name: "arimamodel",
          color: "pink-text-gradient",
        },
        {
          name: "machinelearning",
          color: "blue-text-gradient",
        },
      ],
      image: waste,
      source_code_link: "https://github.com/Amidesai99",
    },
    {
      name: "Online Bookstore Website",
      description:
        "Designed and developed a virtual bookstore website where customers can browse the catalog, select books, manage details of books, customers, payments, delivery, bills, and stocks using HTML, CSS3, PHP, and SQL",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css3",
          color: "pink-text-gradient",
        },
        {
          name: "json",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
      ],
      image: bookstore,
      source_code_link: "https://github.com/Amidesai99",
    },
    {
      name: "Disney plus Hotstar Clone",
      description:
        "Designed and developed a disney plus hotstar clone  with google authentication and integrated with firebase database",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        
      ],
      image: disney,
      source_code_link: "https://github.com/Amidesai99",
    },
    {
      name: "Facebook-Messenger-Clone",
      description:
        "Designed and developed a facebook messenger clone  using React and Redux and integrated with firebase database",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        
        
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        
      ],
      image: facebook,
      source_code_link: "https://github.com/Amidesai99",
    },
  ];
  
  export { services, technologies, experiences, projects };