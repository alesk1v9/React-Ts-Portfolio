import { FaFileDownload } from "react-icons/fa";
import classes from './Resume.module.css';
import resumePdf from '../assets/resume.pdf';
import IconCloud from "../components/IconCloud";


const Resume = () => {

  return (
    <div  className={classes.resume_container}>
      <div data-aos="fade-right" className={classes.stack_container}>

          <h2>Tech Stack</h2>

          <div className={classes.skills}>

          <IconCloud />

          </div>

        
      </div>


      <div className={classes.resume}>
        <h3>Download Resume</h3>
        <a href={resumePdf} download> <FaFileDownload /></a>
      </div>

    </div>

  )
}

export default Resume