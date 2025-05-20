import React from "react";
import styles from "./Education.module.css";
import EducationCode from "../../components/education-code/EducationCode";

const graduationData = {
  school: "Bharti Vidyapeeth College of Engineering for Women, Pune",
  degree: "Bachelor of Information Technology",
  major: "Information Technology",
  gpa: "8.75/10",
  start: "2022",
  end: "2025",
};

const diplomaData = {
  school:
    "Shivnagar Vidya Prasarak Mandal’s    College of Engineering, Baramati",
  degree: "Diploma in Computer Engineering",
  major: "Computer Engineering",
  percentage: "89.60%",
  start: "2019",
  end: "2022",
};

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <h3>Graduation</h3>
        <EducationCode jsonData={graduationData} />
      </div>
      <div className={styles.container__right}>
        <h3>Diploma</h3>
        <EducationCode jsonData={diplomaData} />
      </div>
    </div>
  );
};

export default Education;
