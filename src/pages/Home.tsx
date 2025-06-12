import { Link } from "react-router-dom";
import profileImg from "../assets/images/pic.jpg";
import classes from "./Home.module.css"
import resumePdf from '../assets/AlexsanderSouza_WebDev_2YoE.pdf';
import { FaFileDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div className={classes.home_container}>

       <div className={classes.about_container} data-aos="fade-right"> 
        <h1>Hello, I am <span>Alexsander</span> <br/>
        Nice to meet you!</h1>
        <p>I am a self-motivated Full-Stack Developer with hands-on experience building responsive, optimized,
        and user-friendly web applications using technologies such as JavaScript, TypeScript, React. 
        I've completed the Rutgers Coding Bootcamp, where I worked on collaborative projects using Kanban methodology,
        further sharpening my teamwork and agile development skills.</p>
        <ul className={classes.about_buttons}>
          <Link to="/portfolio" className={classes.btn}>See Projects</Link>
          <Link to="/contact" className={classes.btn}>Contact Me</Link>
          <a href={resumePdf} className={classes.btn} download>Resume <FaFileDownload /></a>
        </ul>
      </div>
      <div className={classes.img_container} data-aos="fade-left">
        <img src={profileImg} alt="avatar" />
      </div>
    </div>
  )
}

export default Home