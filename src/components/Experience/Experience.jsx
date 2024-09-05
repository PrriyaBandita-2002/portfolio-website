import React from "react";

import styles from "./Experience.module.css";
//import skills from "../../components/Data/skills.json";
//import history from "../../components/Data/history.json";
//import { getImageUrl } from "../../utils";
import img1 from "./../../assets/skills/html.png";
import img2 from "./../../assets/skills/css.png";
import img3 from "./../../assets/skills/react.png";
import img4 from "./../../assets/skills/mongodb.png";
import img5 from "./../../assets/skills/graphql.png";
import img6 from "./../../assets/skills/node.png";

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
        
              <div  className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={img1} alt="html" />
                </div>
                <p>HTML</p>
              </div>
              <div  className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={img2} alt="html" />
                </div>
                <p>CSS</p>
              </div>
              <div  className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={img3} alt="html" />
                </div>
                <p>Mongodb</p>
              </div>
              <div  className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={img4} alt="html" />
                </div>
                <p>react</p>
              </div>
              <div  className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={img6} alt="html" />
                </div>
                <p>nodejs</p>
              </div>
              <div  className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={img5} alt="html" />
                </div>
                <p>graphql</p>
              </div>
        </div>
       
      </div>
    </section>
  );
};


export default Experience;
