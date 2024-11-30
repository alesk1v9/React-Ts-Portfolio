import { Link, useLocation } from 'react-router-dom';
import classes from "./Nav.module.css";
import { BsCodeSlash } from "react-icons/bs";


const Nav = () => {

  const currentPage = useLocation().pathname;

  return (
    <div className={classes.nav_container}>
      <div className={classes.nav_name}>
        <BsCodeSlash />
        <h2>Developer Alex</h2>
      </div>
      <div className={classes.nav_items_container}>
        <ul className={classes.nav_items}>
          <Link to="/" className={currentPage === '/' ? `${classes.nav_link_active}` : `${classes.nav_link}`}>About </Link>
          <Link to="/portfolio" className={currentPage === '/portfolio' ? `${classes.nav_link_active}` : `${classes.nav_link}`}>Portfolio</Link>
          <Link to="/contact" className={currentPage === '/contact' ? `${classes.nav_link_active}` : `${classes.nav_link}`}>Contact</Link>
          <Link to="/resume" className={currentPage === '/resume' ? `${classes.nav_link_active}` : `${classes.nav_link}`}>Resume</Link>
        </ul>
      </div>
    </div>
  )
}

export default Nav