import { Link } from "react-router-dom"

import "./ProjectBox.css";
import ArticleIcon from '@mui/icons-material/Article';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
export const ProjectBoxBackend = ({project}) => {
const {name, description, documentation, replLink, skills} = project;
    return(
        <div className="projectBoxContainerBE">
            <div className="projectBoxBE">
            <div className="project-links">
                <span >
                    <Link to={documentation} className="project-link" ><ArticleIcon/></Link></span>
                <span ><Link to={replLink} className="project-link">
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