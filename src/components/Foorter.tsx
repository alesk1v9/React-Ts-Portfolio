import { FaGithub, FaLinkedinIn, } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css"

const Foorter = () => {
  return (
    <footer className={classes.footer_container}>
        <ul className={classes.footer_items} data-aos="fade-up" data-aos-duration="800">
          <Link 
          to="https://github.com/alesk1v9">
            <FaGithub /></Link>
          <Link 
          to="www.linkedin.com/in/alexsander-souza-0169482b5">
            <FaLinkedinIn /></Link>
        </ul>
    </footer>
  )
}

export default Foorter