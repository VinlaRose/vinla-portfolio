import { Link } from "react-router-dom"

import "./ProjectBox.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
export const ProjectBox = ({project}) => {
const {name, description, githubLink, liveLink, skills} = project;
    return(
        <div className="projectBoxContainer">
            <div className="projectBox">
            <div className="project-links">
                <span >
                    <Link to={githubLink} className="project-link" ><GitHubIcon/></Link></span>
                <span ><Link to={liveLink} className="project-link">
                     <OpenInNewIcon/>
                </Link></span>
            </div>
            <h3 className="project-name">
                {name}
            </h3>
            <p className="project-description-short">{description}</p>

            <div className="skills">
                {skills.map(item => ( <span className="skill">
                    {item}
                </span>))}
               
            </div>
            

        </div>
        </div>
        
    )
}