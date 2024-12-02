import { Link } from "react-router-dom";
import profileImg from "../assets/images/profile.png";
import classes from "./Home.module.css"

const Home = () => {
  return (
    <div className={classes.home_container}>
       <div className={classes.about_container} data-aos="fade-right"> 
        <h1>Hello, I am <span>Alexsander</span> <br/>
        Nice to meet you!</h1>
        <p>Self-motivated with a strong passion for technology. I started my journey into
        programming focusing on web development. Skilled in solving problems,
        collaborating in team environments, and building digital experiences.</p>
        <ul className={classes.about_buttons}>
          <Link to="/portfolio" className={classes.btn}>See Projects</Link>
          <Link to="/contact" className={classes.btn}>Contact Me</Link>
        </ul>
      </div>
      <div className={classes.img_container} data-aos="fade-left">
        <img src={profileImg} alt="avatar" />
      </div>
    </div>
  )
}

export default Home