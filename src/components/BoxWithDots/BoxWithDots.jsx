import React from 'react';
import './BoxWithDots.css'; 
import StartIcon from '@mui/icons-material/Start';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import slaybookPic from "../../assets/slaybook.png"

const BoxWithDots = ({title, description}) => {
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
        <span className='projectLinksGithub' >Github</span>
        <span className='liveLinks'>See Project 
       <ArrowForwardIcon className='arrow'/>
         </span>
        
      </div>

    </div>
  );
};

export default BoxWithDots;
