import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFileDownload } from "react-icons/fa";
import { SiTypescript, SiExpress, SiMongodb, SiMysql, SiJquery, SiJest } from "react-icons/si";
import classes from './Resume.module.css';
import resumePdf from '../assets/resume.pdf';

const Resume = () => {

  return (
    <div  className={classes.resume_container}>
      <div data-aos="fade-right" className={classes.stack_container}>

          <h3>Tech Stack</h3>

          <div className={classes.skills}>

          <FaJs />
          <FaReact />
          <SiTypescript />
          <SiExpress />
          <SiMongodb />
          <FaNodeJs />
          <SiMysql />
          <FaHtml5 />
          <FaCss3Alt />
          <SiJquery />
          <FaGitAlt />
          <SiJest />

          </div>

        
      </div>


      <div data-aos="fade-left" className={classes.resume}>
        <h3>Download Resume</h3>
        <a href={resumePdf} download> <FaFileDownload /></a>
      </div>

    </div>

  )
}

export default Resume