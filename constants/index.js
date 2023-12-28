import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineDribbble,
  AiOutlineLayout,
  AiOutlineAppstore,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import {
  BsAward,
  BsBriefcase,
  BsHeadphones,
  BsCodeSlash,
  BsMessenger,
  BsFacebook,
} from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

export const navLinks = [
  { name: "Home", route: "/#home" },
  { name: "About", route: "/#about" },
  { name: "Skills", route: "/#skills" },
  { name: "Services", route: "/#services" },
  { name: "Projects", route: "/#projects" },
  { name: "Contact", route: "/#contact" },
];

export const socialLinks = [
  { name: "X", link: "twitter.com", icon: <FaXTwitter /> },
  { name: "LinkedIn", link: "linkedin.com", icon: <FaLinkedinIn /> },
  { name: "Github", link: "github.com", icon: <AiOutlineGithub /> },
  { name: "Instagram", link: "instagram.com", icon: <AiOutlineInstagram /> },
  { name: "Dribbble", link: "dribbble.com", icon: <AiOutlineDribbble /> },
];

export const aboutData = [
  { title: "Experience", subtitle: "2 Years Working", icon: <BsAward /> },
  { title: "Completed", subtitle: "15+ Projects", icon: <BsBriefcase /> },
  { title: "Support", subtitle: "Online 24/7", icon: <BsHeadphones /> },
];

export const frontendSkills = [
  "Next.js",
  "React",
  "Redux Toolkit",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "GraphQL",
  "Framer Motion",
];

export const backendSkills = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT",
  "Next-Auth",
];

export const services = [
  {
    title: "Frontend development",
    subtitle:
      "Design and implement user-friendly, responsive, and visually appealing user interfaces",
    icon: <AiOutlineLayout />,
    details: [
      "Reusable React components",
      "Integration of third-party APIs and services",
      "State management solutions such as Redux",
      "Implementation of RESTful APIs and GraphQL",
      "Collaboraion with UI/UX designers",
    ],
  },
  {
    title: "Backend development",
    subtitle:
      "Implement security best practices to protect user data and prevent vulnerabilities",
    icon: <BsCodeSlash />,
    details: ["Optimized Code"],
  },
  {
    title: "Full Stack Development",
    subtitle:
      "Optimized web applications for performance, SEO, and accessibility",
    icon: <AiOutlineAppstore />,
    details: ["Hign Quality Web Application", "Easily Maintainable"],
  },
];

export const projectsData = [
  {
    id: 1,
    image: "",
    title: "Threads Copy Project",
    github: "https://github.com/sourovBasu07/thread_app",
    liveSite: "https://thread-app-ten.vercel.app/",
    category: ["Full Stack", "Next.js"],
  },
  {
    id: 2,
    image: "",
    title: "Flexibble Project",
    github: "https://github.com/sourovBasu07/grafbase_flexibble",
    liveSite: "https://grafbase-flexibble-sandy.vercel.app/",
    category: ["Full Stack", "GraphCMS"],
  },
  {
    id: 3,
    image: "",
    title: "Promptopia Prompt Sharing",
    github: "https://github.com/sourovBasu07/promptopia",
    liveSite: "https://promptopia-indol-one.vercel.app/",
    category: ["Full Stack"],
  },
  {
    id: 4,
    image: "",
    title: "Car Showcase App",
    github: "https://github.com/sourovBasu07/car_showcase",
    liveSite: "https://carshowcase07.vercel.app/",
    category: ["Front-end"],
  },
  {
    id: 5,
    image: "",
    title: "Technotes notes app",
    github: "https://github.com/sourovBasu07/techNotes",
    liveSite: "",
    category: ["Full Stack"],
  },
  {
    id: 6,
    image: "",
    title: "Real Estate Project",
    github: "https://github.com/sourovBasu07/real_estate_project",
    liveSite: "https://real-estate-project-livid.vercel.app/",
    category: ["Fornt-end"],
  },
  {
    id: 7,
    image: "",
    title: "Banking Landing Page",
    github: "https://github.com/sourovBasu07/banking_website_project",
    liveSite: "https://gravitybanking07.netlify.app/",
    category: ["Front-end"],
  },
  {
    id: 8,
    image: "",
    title: "Metaverse landing page",
    github: "https://github.com/sourovBasu07/metaverse_app",
    liveSite: "https://metaverse07.netlify.app/",
    category: ["Front-end"],
  },
  {
    id: 9,
    image: "",
    title: "Admin Dashboard",
    github: "https://github.com/sourovBasu07/admin_dashboard",
    liveSite: "",
    category: ["Front-end"],
  },
  {
    id: 10,
    image: "",
    title: "Memories Social Media",
    github: "https://github.com/sourovBasu07/memories_app",
    liveSite: "",
    category: ["Full Stack"],
  },
  {
    id: 11,
    image: "",
    title: "GraphCMS Blog Project",
    github: "https://github.com/sourovBasu07/graphcms_blog",
    liveSite: "",
    category: ["Full Stack"],
  },
  {
    id: 12,
    image: "",
    title: "Travel Website Landing Page",
    github: "https://github.com/sourovBasu07/travel_website07",
    liveSite: "https://travel-website07.vercel.app/",
    category: ["Front-end"],
  },
  {
    id: 13,
    image: "",
    title: "Nike Website Landing Page",
    github: "https://github.com/sourovBasu07/nike_website07",
    liveSite: "https://nike-website07.vercel.app/",
    category: ["Front-end"],
  },
];

export const testimonialsData = [
  {
    id: 1,
    image: "/assets/testimonial1.png",
    title: "Jhon Doe",
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
  {
    id: 2,
    image: "/assets/testimonial2.png",
    title: "Harry Clinton",
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
  {
    id: 3,
    image: "/assets/testimonial3.png",
    title: "Sara Cill",
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
  {
    id: 4,
    image: "/assets/testimonial1.png",
    title: "Jhon Doe",
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
  {
    id: 5,
    image: "/assets/testimonial2.png",
    title: "Harry Clinton",
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
  {
    id: 6,
    image: "/assets/testimonial3.png",
    title: "Sara Cill",
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
  {
    id: 7,
    image: "/assets/testimonial1.png",
    title: "Jhon Doe",
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
];

export const contactData = [
  {
    title: "Email",
    id: "souravbasu123456@gmail.com",
    icon: <AiOutlineMail />,
    link: "",
  },
  {
    title: "Whatsapp",
    id: "01407324971",
    icon: <AiOutlineWhatsApp />,
    link: "",
  },
  {
    title: "Messenger",
    id: "sourav.basu.39982",
    icon: <BsMessenger />,
    link: "",
  },
];

export const footerSocialLinks = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/sourav.basu.39982",
    icon: <BsFacebook />,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/lions.roar07/",
    icon: <AiFillInstagram />,
  },
  {
    title: "Twitter",
    link: "https://twitter.com/learn_react_07",
    icon: <FaSquareXTwitter />,
  },
];
