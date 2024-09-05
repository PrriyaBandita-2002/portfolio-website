import React, { useEffect } from "react";
import styles from "./../../components/Projects/Project.module.css";
import AOS from "aos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

import project from "./../../assets/projects/project.png";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Filmyverse",
      imageSrc: project,
      description: "A web application to rate movies and add reviews using TMDB API.",
      skills: "[React, TMDB API, Firebase, Tailwind CSS]",
      demo: "https://filmyverse-4f8b6.web.app/",
      source: "https://www.https://github.com/PrriyaBandita-2002/filmyverse",
    },
    {
      id: 2,
      title: "JETFIT",
      imageSrc: project,
      description: "A platform to log and track exercise routines and practice sessions.",
      skills: "[React, Rapid API, MongoDB, Material UI]",
      demo: "http://jetfit.netlify.app",
      source: "https://www.https://github.com/PrriyaBandita-2002/jetfit",
    },
    {
      id: 3,
      title: "Agrogen",
      imageSrc: project,
      description: "An app to empower farmers by optimizing crop production.",
      skills: "[React, Node.js, Express, MongoDB]",
      demo: "https://www.example.com/logistic-balance",
      source: "https://www.github.com/logistic-balance",
    },
    {
      id: 4,
      title: "Amazon Clone",
      imageSrc: project,
      description: "A clone of a popular e-commerce application using React.",
      skills: "[React, Redux, Node.js, Express]",
      demo: "https://clone-67d89.web.app/",
      source: "https://www.https://github.com/PrriyaBandita-2002/amazon",
    },
    // Add more projects here as needed
  ];


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="projects"className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <br />
      <div className="slider-container">
        <Slider {...settings}>
          {projects.map(({ id, title, imageSrc, description, skills, demo, source }) => (
            <div data-aos="fade-in" data-aos-duration="500" key={id}>
              <div className={styles.card}>
                <img className={styles.cardImg} src={imageSrc} alt={title} />
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.links}>
                 <ul className={styles.skills}><li className={styles.skill}>{skills}</li></ul> 
                  <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                  <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
