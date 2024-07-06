import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaReact } from "react-icons/fa6";
import { SiThreedotjs } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { SiFirebase } from "react-icons/si";
import { IoMdDownload } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsChatDots } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";

export const navbarLinks = [
  { title: "Home", to: "/" },
  { title: "Projects", to: "/projects" },
  { title: "Blogs", to: "/blogs" },
  { title: "Contact", to: "/contact" },
];

export const socialLinks = [
  {
    title: "Facebook",
    description: "Follow on Facebook",
    link: "/",
    icon: <FaFacebook size={30} />,
    color: "dodgerblue",
  },
  {
    title: "Gmail",
    description: "Send direct mail ",
    link: "/",
    color: "crimson",
    icon: <BiLogoGmail size={30} />,
  },
];
export const quickActions = [
  {
    title: "Share Portfolio",
    isBtn: true,
    icon: <IoShareSocialOutline size={25} />,
  },
  { title: "Read Blogs", to: "/blogs", icon: <TiDocumentText size={25} /> },
  {
    title: "Templates",
    to: "/projects#templates",
    icon: <MdOutlineDesignServices size={25} />,
  },
];

export const expertise = [
  {
    title: "React js",
    description:
      "React js is a javascript library for creating ui based on components",
    Icon: FaReact,
    IconColor: "dodgerblue",
    value: 90,
    link: "https://react.dev/",
  },
  {
    title: "Three js",
    description:
      "Three js is a javascript library for rendering 3D content on website using WebGL",
    Icon: SiThreedotjs,
    IconColor: "black",
    value: 60,
    link: "https://threejs.org/",
  },
  {
    title: "Next js",
    description:
      "Next js is react framework for creating react applications using SSR and others",
    Icon: SiNextdotjs,
    IconColor: "black",
    value: 50,
    link: "https://nextjs.org/",
  },
  {
    title: "Javascript",
    description:
      "Javascript is programming language used for creating interactive websites and ui",
    Icon: IoLogoJavascript,
    IconColor: "black",
    value: 95,
    link: "https://www.w3schools.com/js/",
  },
  {
    title: "Bootstrap",
    description:
      "Bootstrap is css framework for creating UI using built in UI components",
    Icon: BsBootstrapFill,
    IconColor: "purple",
    value: 80,
    link: "https://getbootstrap.com/",
  },
  {
    title: "Firebase",
    description:
      "Firebase is google DMS , used for creating backend of websites or web-apps",
    Icon: SiFirebase,
    IconColor: "orangered",
    value: 60,
    link: "https://firebase.google.com/",
  },
];

export const bottomBarLinks = [
  {
    title: "Download CV",
    icon: <IoMdDownload size={25} />,
    props: { href: "" },
    Tag: "a",
  },
  {
    title: "Facebook",
    icon: <CiFacebook size={25} />,
    props: { href: "" },
    Tag: "a",
  },
  {
    title: "Quick Chat",
    icon: <BsChatDots size={25} />,
    props: { href: "/quickchat" },
    Tag: Link,
  },
  {
    title: "Professional Experience",
    icon: <FaRegStar size={25} />,
    props: { href: "#experience" },
    Tag: "a",
  },
];
