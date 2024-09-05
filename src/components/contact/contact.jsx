import React from "react";
import emailIcon from "./../../assets/contact/emailIcon.png";
import linkedinIcon from "./../../assets/contact/linkedinIcon.png";
import githubIcon from "./../../assets/contact/githubIcon.png";
import styles from "./Contact.module.css";
 const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" className={styles.icon} />
          <a href="mailto:priya2002.dash@gmail.com">
            priya2002.dash@email.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            className={styles.icon}
          />
          <a
            href="https://www.linkedin.com/in/prriyadash"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/prriyadash
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="GitHub icon" className={styles.icon} />
          <a
            href="https://https://github.com/PrriyaBandita-2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/PrriyaBandita-2002
          </a>
        </li>
      </ul>
    </footer>
  );
};


export default Contact;
