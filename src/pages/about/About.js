import React from "react";
import styles from "./About.module.css";

const aboutMe = [
  "Welcome to my portfolio!",
  "I'm Saniya Bagwan, a passionate developer with a love for creating interactive and innovative web applications.",
  "With a strong foundation in HTML5, CSS3, JavaScript, and React.js, I bring ideas to life by crafting clean, efficient code.",
  "Let's connect and build something amazing together!",
];

const profileSummary = [
  "Profile Summary:",
  "  Passionate Full-Stack Developer skilled in React.js, Node.js, Express.js, and MySQL.",
  "  Experienced in building scalable applications with Redux, Ant Design, GSAP, and RESTful APIs.",
  "  Proficient in authentication, security (JWT), and database management.",
  "  Committed to writing clean, maintainable code and collaborating on innovative solutions.",
];

const technicalSkills = [
  "Technical Skills:",
  "  Frontend Development - HTML5, CSS3, JavaScript, React.js, React Router, Redux, Context API, Tailwind CSS, Bootstrap, Ant Design, GSAP",
  "  Backend Development - Node.js, Express.js, REST APIs, JWT Authentication",
  "  Core Concepts - Basics of Java, Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP)",
  "  Databases - MySQL, MongoDB",
  "  Cloud DevOps - AWS (Route 53, S3 Bucket)",
  "  Developer Tools - VS-Code, Git, GitHub, Postman",
];

const renderSection = (section) => (
  <>
    <p className={styles.line}>
      <span className={styles.tag}>{"<p>"}</span>
    </p>
    {section.map((line, index) => (
      <p className={styles.line} key={index}>
        <span className={styles.tag}>{"   <span> "}</span>
        <span>{line}</span>
        <span className={styles.tag}>{" </span>"}</span>
      </p>
    ))}
    <p className={styles.line}>
      <span className={styles.tag}>{"</p>"}</span>
    </p>
  </>
);

const About = () => {
  return (
    <div className={styles.code}>
      {renderSection(aboutMe)}
      <div style={{ marginTop: "2rem" }} />
      {renderSection(profileSummary)}
      <div style={{ marginTop: "2rem" }} />
      {renderSection(technicalSkills)}
    </div>
  );
};

export default About;
