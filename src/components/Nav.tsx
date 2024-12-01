import { Link, useLocation } from 'react-router-dom';
import classes from "./Nav.module.css";
import { BsCodeSlash } from "react-icons/bs";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";


const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  const currentPage = useLocation().pathname;

  return (
    <div className={classes.nav_container}>
      <div data-aos="fade-right" data-aos-duration="800"className={classes.nav_name}>
        <BsCodeSlash />
        <h2>Developer Alex</h2>
      </div>

    <div className={classes.hamburguer} onClick={toggleMenu}>
      {isOpen ? <FaTimes /> : <FaBars />}
    </div>

      <div className= { `${classes.nav_items_container} ${isOpen ? classes.show_menu : ''}`}>
        <ul className={classes.nav_items} data-aos="zoom-out-left" data-aos-duration="800">
          <Link to="/" 
          className={currentPage === '/' ? `${classes.nav_link_active}` : `${classes.nav_link}`}
          onClick={toggleMenu}>About </Link>
          <Link to="/portfolio" 
          className={currentPage === '/portfolio' ? `${classes.nav_link_active}` : `${classes.nav_link}`}
          onClick={toggleMenu}>Portfolio</Link>
          <Link to="/contact" 
          className={currentPage === '/contact' ? `${classes.nav_link_active}` : `${classes.nav_link}`}
          onClick={toggleMenu}>Contact</Link>
          <Link to="/resume" 
          className={currentPage === '/resume' ? `${classes.nav_link_active}` : `${classes.nav_link}`}
          onClick={toggleMenu}>Resume</Link>
        </ul>
      </div>
    </div>
  )
}

export default Nav