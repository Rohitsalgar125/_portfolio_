// Enter all your detials in this file
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";

// Enter your Personal Details here
export const personalDetails = {
  name: "Rohit Salgar",
  tagline: "Frontend Developer",
  img: profile,
  about: `I specialize in Frontend Development and UI/UX design, focusing on creating intuitive interfaces and seamless user experiences. With a passion for clean code and aesthetic design, I aim to deliver impactful digital solutions that resonate with users.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/rohit-salgar-rohit125",
  github: "https://github.com/Rohitsalgar125",
  email: "rhohitsalgar@gmail.com",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Developer",
    Company: `Dokonaly Cargo Management Service Private Limited`,
    Location: "Chennai",
    Type: "Full Time",
    Duration: "July 2022 - Present",
  },
  {
    Position: "Full Stack Developement",
    Company: `Newton School`,
    Location: "Banglore",
    Type: "Internship",
    Duration: "December 2021 - june 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Mechanical Engineering",
    Company: `Sveri college of engineering Pandharpur`,
    Location: "Pandharpur",
    Type: "Full Time",
    Duration: "Aug 2017 - Mar 2022",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Zomato Clone",
    image: projectImage1,
    description: `An interactive Zomato clone frontend application that replicates the core features of the popular food delivery platform.`,
    techstack: "HTML/CSS, React",
    previewLink: "https://zomato-clones.onrender.com/",
    githubLink: "https://github.com/balajigithubwork/zomato-clone",
  },
];
