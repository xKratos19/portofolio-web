import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  css,
  reactjs,
  git,
  docker,
  ragProject,
  homelab,
} from "../assets";

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "QA & Test Automation",
    icon: mobile,
  },
  {
    title: "DevOps & AI",
    icon: creator,
  },
];

const technologies = [
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
    name: "CSS",
    icon: css,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Fullstack Software Developer (Internship)",
    company_name: "Pandoras Post SRL",
    icon: backend,
    iconBg: "#383E56",
    date: "December 2025 - March 2026",
    points: [
      "Developed and scaled RESTful APIs using .NET Core, implementing Clean Architecture and Repository Pattern to ensure high maintainability and business logic decoupling.",
      "Engineered reactive UIs in Angular, optimizing client-side performance through Lazy Loading and efficient state management of reusable components.",
      "Reduced manual testing time by over 60% by implementing an E2E automated testing framework with Playwright, covering critical user flows.",
      "Collaborated in cross-functional teams under Agile/Scrum methodology, participating in code reviews and providing technical solutions for SQL database optimization.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "RAG (Retrieval-Augmented Generation)",
    description:
      "Advanced document processing system utilizing LLMs to provide precise contextual answers based on private datasets, with semantic data pipelines into vector databases for optimized information retrieval.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "vector-db",
        color: "pink-text-gradient",
      },
    ],
    image: ragProject,
    source_code_link: "https://github.com/xKratos19/RAG-project",
  },
  {
    name: "Personal Homelab & Infrastructure",
    description:
      "Complex self-hosting infrastructure using Docker for service containerization and private network management, with server monitoring and security solutions demonstrating advanced Linux sysadmin and DevOps practices.",
    tags: [
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "linux",
        color: "green-text-gradient",
      },
      {
        name: "self-hosting",
        color: "pink-text-gradient",
      },
    ],
    image: homelab,
    source_code_link: "https://github.com/xKratos19/homelab",
  },
];

export { services, technologies, experiences, testimonials, projects };