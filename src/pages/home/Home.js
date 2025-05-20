import { FaDownload } from "react-icons/fa"; // Font Awesome
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Technologies from "./Technologies";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.foreground}>
        <div className={styles.content}>
          <h1 className={styles.name}>Saniya Bagwan</h1>
          <h6 className={styles.bio}>Full Stack Web Developer</h6>
          <Link to="/projects">
            <button className={styles.button}>View Work</button>
          </Link>
          <Link to="/contact">
            <button className={styles.button__outlined}>Contact Me</button>
          </Link>
          <span style={{ margin: "0 10px" }}></span>
          <a
            href="/Saniya_Bagwan_8208005622_new.pdf"
            download
            rel="noopener noreferrer"
          >
            <button className={styles.button__outlined}>
              <FaDownload style={{ marginRight: "8px" }} />
              Resume
            </button>
          </a>
        </div>
      </div>
      <div>
        <Technologies />
      </div>
    </div>
  );
};

export default Home;
