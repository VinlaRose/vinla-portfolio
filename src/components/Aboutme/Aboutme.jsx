import React, { useReducer } from 'react';
import './Aboutme.css'; 
import { initialState, reducer } from '../../context/reducer';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { GridIcons } from '../gridIcons/GridIcons';
import gifImage from '../assets/skills.gif'




const AboutMe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleDarkMode = () => {
    dispatch({ type: state.darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
  };

  const containerClass = state.darkMode ? 'dark-mode-on' : 'light-mode-on';

  return (
    <div  className={`container ${containerClass}`}>
         <nav className="navbar">
      <div className="logo">
       
      </div>
      <div className="nav-buttons">
     
        {/* <a className='nav-a' href="#">aboutme</a> */}
        <a className='nav-a' href="#projects">projects</a>
        <a className='nav-a' href="#">blogs</a>
        <a className='nav-a' href="#connect">connect</a>
        <span onClick={toggleDarkMode}>{state.darkMode ? <LightModeIcon/> : <DarkModeIcon/>}</span>
      </div>
    </nav>
    <div className='opening'>
     
      <div className="gridSpace"><GridIcons/></div>
      
      <div className="skillsHeading">
      <img className='skillsHeadingimg' src={gifImage} alt="" autoPlay={true}  />
      <h1 className="project-heading">My Skills.</h1>
      
      </div>
      
    </div>
      
    </div>
  );
};

export default AboutMe;
