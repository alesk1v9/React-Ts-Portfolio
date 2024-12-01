import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiExpress, SiMongodb } from "react-icons/si";
import profileImg from "../assets/profile.png";
import classes from "./Home.module.css"

const Home = () => {
  return (
    <div className={classes.home_container}>
      <div>
        <h1>Hello, I am <span>Alexsander</span>, Web Developer!</h1>
        <p>Self-motivated with a strong passion for technology. I started my journey into
        programming  focusing primarily on web development</p>
        <div>
        <FaJs />
        <FaReact />
        <SiTypescript />
        <SiExpress />
        <SiMongodb />
        <FaNodeJs />
        </div>
      </div>
      <div>
        <img src={profileImg} alt="avatar" />
      </div>
    </div>
  )
}

export default Home