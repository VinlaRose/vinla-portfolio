import React from 'react';
import './BoxWithDots.css'; 
import StartIcon from '@mui/icons-material/Start';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BoxWithDots = ({title, description, githubLink, projectLink}) => {
  return (
    <div className="box-info">
      <div className="dots-info">
        <div className="dot-info"></div>
        <div className="dot-info"></div>
        <div className="dot-info"></div>
      </div>
      <div className="line-info"></div>
      <div className="projectHeading">{title}</div>
     
      <div className="projectDescription">{description}</div>
      
      <div className="projectLinks">
        <a className='projectLinksGithub' href={githubLink} >Github</a>
        <a className='liveLinks' href={projectLink}>See Project 
       <ArrowForwardIcon className='arrow'/>
         </a>
        
      </div>

    </div>
  );
};

export default BoxWithDots;
