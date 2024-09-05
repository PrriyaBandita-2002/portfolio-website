import React from 'react'
import styles from "./Hero.module.css";
import hero from "../../assets/hero/heroImage.png";
const Hero = () => {
  return (
    <section className={styles.container} >
     <div className={styles.content} ><h1 className={styles.title} >Hi, I'am Prriya</h1>
     <p className={styles.description} >I am a Full Stack Developer and a sophomore at IIIT Bhubaneswar, pursuing my B.Tech in Electronics and Telecommunication. I am currently learning React, Next.js, and Node.js. I am passionate about building innovative web applications and am always eager to collaborate on exciting projects. Feel free to reach out for collaboration or work opportunities.</p>
    <a className={styles.contactBtn}  href="mailto:priya2002.dash@gmail.com">
        Contact Me
    </a>
    </div>
    <img  className={styles.heroImg} 
        src={hero}
        alt="Hero image of me"
        
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero
