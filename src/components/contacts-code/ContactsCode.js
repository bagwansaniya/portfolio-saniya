import React from "react";
import styles from "./ContactsCode.module.css";

const socialsData = [
  {
    social: "website",
    link: "saniyabagwan.me",
    href: "https://saniyabagwan.me",
  },
  {
    social: "email",
    link: "saniya.bagwan.9226@gmail.com",
    href: "mailto:saniya.bagwan.9226@gmail.com",
  },
  {
    social: "github",
    link: "bagwansaniya",
    href: "https://github.com/bagwansaniya",
  },
  {
    social: "linkedin",
    link: "saniya-bagwan",
    href: "https://www.linkedin.com/in/saniya-bagwan-661382260/",
  },
];

const ContactsCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {socialsData.map((socialItem, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{socialItem.social} :{" "}
          <a href={socialItem.href} target="_blank" rel="noreferrer">
            {socialItem.link}
          </a>
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactsCode;
