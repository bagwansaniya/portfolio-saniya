import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/project-card/ProjectCard";
import Myntra from "../../assets/project-images/Myntra.png";
import BrokerWeb from "../../assets/project-images/BrokerWeb.png";
import ProductManagement from "../../assets/project-images/ProductManagement.png";
import ProteinCookie from "../../assets/project-images/ProteinCookie.png";
import Netflix from "../../assets/project-images/Netflix.png";
import TODO from "../../assets/project-images/TODO.png";
const projectsData = [
  {
    id: 1,
    name: "Power Bite",
    image: ProteinCookie,
    description:
      "Developed an e-commerce site for protein cookies with product filtering, cart management, animations, and global search.",
    tags: ["react", "tailwind", "gsap", "framer-motion"],
    source_code: "https://github.com/bagwansaniya/Protein_Cookies_Project",
    demo: "https://earnest-tiramisu-4eddaa.netlify.app/",
  },
  {
    id: 2,
    name: "Product Management System",
    image: ProductManagement, // Replace with actual image if available
    description:
      "A full-stack system with role-based login (Admin/User). Admin can manage products (add/edit/delete), toggle status, and search/filter. Built with React.js, Express.js, and MySQL.",
    tags: ["react.js", "express.js", "mysql", "bootstrap", "jwt"],
    source_code: "https://github.com/bagwansaniya/softtrine_task",
    demo: "https://softtrine-1.onrender.com/",
  },
  {
    id: 3,
    name: "Myntra Clone",
    image: Myntra,
    description:
      "Engineered a responsive Myntra-inspired e-commerce interface with animations and modern UI components, including email integration.",
    tags: ["react.js", "redux", "framer-motion", "GSAP", "tailwind", "node.js"],
    source_code: "https://github.com/bagwansaniya/Myntra-Clone-Project",
    demo: "https://myntra-clone-steel.vercel.app/",
  },
  {
    id: 4,
    name: "To-Do App with JWT Authentication",
    image: TODO,
    description:
      "Designed a MERN stack to-do app with JWT authentication and CRUD operations. Focused on secure user management and task organization.",
    tags: ["mongodb", "express", "react", "node", "jwt"],
    source_code: "https://github.com/bagwansaniya/ToDo-FullStack-CRUD-Project",
    demo: "#",
  },
  {
    id: 5,
    name: "Broker Website Project (SK Properties)",
    image: BrokerWeb, // Replace with actual image if available
    description:
      "Modern real estate website built with React + TypeScript and GSAP animations. Includes property listings, services, contact form, and responsive design.",
    tags: ["react", "typescript", "tailwind", "gsap", "vite"],
    source_code: "https://github.com/bagwansaniya/Broker_Website_Project",
    demo: "https://endearing-raindrop-34d7e0.netlify.app/",
  },
  {
    id: 6,
    name: "Netflix Clone",
    image: Netflix,
    description:
      "Built a feature-rich Netflix-inspired platform with user authentication, personalized dashboard, and seamless video streaming.",
    tags: ["react.js", "GSAP", "tailwind"],
    source_code: "https://github.com/bagwansaniya/netflix-clone",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
