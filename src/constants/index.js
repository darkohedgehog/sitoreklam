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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  
  
  export const navLinks = [
    {
      id: "about",
      title: "O nama",      
    },
    {
      id: "work",
      title: "Usluge",     
    },
    {
      id: "contact",
      title: "Kontakt",     
    },
    
  ];

  const term = [
    {
      id: "terms",
      title: "Pravila privatnosti i uvjeti korištenja",
    },
  ]
  
  const services = [
    {
      title: "lorem ipsum dolorem",
      icon: web,
    },
    {
      title: "lorem ate",
      icon: mobile,
    },
    {
      title: "lorem ipsum",
      icon: backend,
    },
    {
      title: "lorem dios",
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Izrada ukrasnih kutija",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
      ],
    },
    {
      title: "Kalendari",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
      ],
    },
    {
      title: "Vizit karte",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
      ],
    },
    {
      title: "Značke i privesci",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.",
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "",
    },
    {
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "",
    },
    {
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci erat",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "",
    },
  ];
  
  export { services, technologies, experiences, term, projects };