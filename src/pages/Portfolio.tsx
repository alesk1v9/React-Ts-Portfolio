import { ProjectProps } from "../types/project";
import { Link } from "react-router-dom";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import githubFinderImg from "../assets/images/project-images/githubfinderimg.png";
import barberShopImg from "../assets/images/project-images/barbershopimg.png";
import expenseTrackerTmg from "../assets/images/project-images/expensetrackerimg.png";
import recipeFinderImg from "../assets/images/project-images/recipefinderimg.png";
import todoImg from "../assets/images/project-images/todoimg.png";
import weatherImg from "../assets/images/project-images/weatherimg.png";
import classes from "./Portfolio.module.css";


const Portfolio = () => {

  const projects: ProjectProps[] = [
    {
        "id": 1,
        "title": "Github Finder",
        "tools": ["REACT", "TYPESCRIPT"],
        "image": githubFinderImg,
        "github_url": "https://github.com/alesk1v9/Github-Finder.git",
        "deployed_url": "https://findreposongithub.netlify.app/"
    },
    {
        "id": 2,
        "title": "Barber Shop",
        "tools": ["HTML", "SASS"],
        "image": barberShopImg,
        "github_url": "https://github.com/alesk1v9/Landing-Page.git",
        "deployed_url": "https://barbershop-landing-page.vercel.app/"
    },
    {
        "id": 3,
        "title": "Recipe Finder",
        "tools": ["HTML", "CSS", "JS"],
        "image": recipeFinderImg,
        "github_url": "https://github.com/GibinMGeorge/Recipe_Finder.git",
        "deployed_url": "https://gibinmgeorge.github.io/Recipe_Finder/"
    },
    {
        "id": 4,
        "title": "Expense Tracker",
        "tools": ["HANDLEBARS", "MYSQL", "CSS", "JS"],
        "image": expenseTrackerTmg,
        "github_url": "https://github.com/JackeGould/expense-tracker",
        "deployed_url": "https://afternoon-plains-88345-4279b3a41bbe.herokuapp.com/"
    },
    {
        "id": 5,
        "title": "Weather Dashboard",
        "tools": ["HTML", "CSS", "JS"],
        "image": weatherImg,
        "github_url": "https://github.com/alesk1v9/Weather-Dashboard.git",
        "deployed_url": "https://alesk1v9.github.io/Weather-Dashboard/"
    },
    {
        "id": 6,
        "title": "To-Do App",
        "tools": ["REACT", "EXPRESS", "MONGODB", "NODEJS"],
        "image": todoImg,
        "github_url": "https://github.com/alesk1v9/TO-DO-APP.git",
        "deployed_url": "https://to-do-app-22ko.onrender.com/"
    }
  ];

  return (
    <div className={classes.portfolio_conatainer}>
      <h2 data-aos="fade-left">My Projects</h2>
      <div data-aos="fade-right" className={classes.projects_container}>
        {projects.map((project) => (
          <div className={classes.project_card} key={project.id}>

            <div className={classes.image_container}>
              <img src={project.image} alt={project.title} />
            </div>

            <div className={classes.project_details}>
              <h3>{project.title}</h3>
              <ul className={classes.details_list}>
                {project.tools.map((tool) => (
                  <li>{tool}</li>
                ))}
              </ul>

              <ul className={classes.btns_container}>
                <Link to={project.github_url} target="_blank"><FaGithub /></Link>
                <Link to={project.deployed_url} target="_blank"> <GrDeploy /></Link>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio