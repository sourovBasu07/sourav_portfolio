import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineDribbble,
} from "react-icons/ai";
import { BsAward, BsBriefcase, BsHeadphones } from "react-icons/bs";

export const navLinks = [
  { name: "Home", route: "/#home" },
  { name: "About", route: "/#about" },
  { name: "Skills", route: "/#skills" },
  { name: "Services", route: "/#services" },
  { name: "Portfolio", route: "/#portfolio" },
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
