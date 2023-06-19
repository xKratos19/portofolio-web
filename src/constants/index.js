import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  solidity,
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
  candour,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Smart Contract Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Unit Tester",
    icon: backend,
  },
  {
    title: "Platform Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Solidity",
    icon: solidity,
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
];

const experiences = [
  {
    title: "Shopify Landing Page Creator",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "October 2019 - January 2021",
    points: [
      "Intuitive Drag-and-Drop Interface: Create stunning landing pages effortlessly using a user-friendly drag-and-drop interface. No coding skills required, simply select and arrange elements to design a visually appealing landing page.",
      "Customizable Templates: Choose from a wide range of professionally designed templates to kickstart your landing page creation. Customize colors, fonts, and layouts to align with your brand identity and create a unique and engaging landing page.",
      "Mobile-Responsive Design: Ensure a seamless user experience across devices with built-in mobile responsiveness. Your landing pages will automatically adapt to different screen sizes, optimizing engagement and conversions on both desktop and mobile platforms.",
      "Integration and Analytics: Seamlessly integrate your landing pages with Shopify's robust e-commerce ecosystem. Track and measure key performance metrics using advanced analytics tools, empowering you to optimize your landing pages for maximum conversion rates and sales.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Freelancing",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "January 2021 - March 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Solidity Developer",
    company_name: "Freelancing",
    icon: solidity,
    iconBg: "#E6DEDD",
    date: "January- 2022 - February 2023",
    points: [
      "Smart contract development: Write, deploy, and secure smart contracts for decentralized applications (dApps) and blockchain-based solutions.",
      "Contract testing and debugging: Conduct comprehensive testing, integration, and debugging to ensure smart contract functionality and identify any vulnerabilities.",
      "Code auditing and security reviews: Perform audits and security reviews to identify and address potential vulnerabilities or code inefficiencies in smart contracts",
      "Integration and deployment: Collaborate with development teams to seamlessly integrate smart contracts into applications and deploy them on the Ethereum network or other compatible blockchains.",
    ],
  },
  {
    title: "Candour.Digital Smart Contract Developer",
    company_name: "Candour.Digital",
    icon: candour,
    iconBg: "#E6DEDD",
    date: "February 2023 - Present",
    points: [
      "Smart contract development: Write, deploy, and secure smart contracts for Digital Product Passport concept.",
      "Contract testing and debugging: Conduct comprehensive testing, integration, and debugging to ensure smart contract functionality.",
      "Code auditing and security reviews.",
      "Integration and deployment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };