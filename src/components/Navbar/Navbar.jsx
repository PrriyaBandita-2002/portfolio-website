import React, { useState } from 'react';
import styles from './../../components/Navbar/Navbar.module.css'; 
import menuIcon from "./../../assets/nav/menuIcon.png";
import closeIcon from "./../../assets/nav/closeIcon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => {
      console.log('Before toggle:', prevMenuOpen);
      return !prevMenuOpen;
    });
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img 
          className={styles.menubtn} 
          src={menuOpen ? closeIcon : menuIcon} 
          alt={menuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        />
        <ul 
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
