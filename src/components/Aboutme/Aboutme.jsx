import React, { useReducer } from 'react';
import './Aboutme.css'; 
import { initialState, reducer } from '../../context/reducer';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { GridIcons } from '../gridIcons/GridIcons';


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
        <a className='nav-a' href="#">Aboutme</a>
        <a className='nav-a' href="#projects">Projects</a>
        <a className='nav-a' href="#">Blogs</a>
        <a className='nav-a' href="#connect">Connect</a>
        <span onClick={toggleDarkMode}>{state.darkMode ? <LightModeIcon/> : <DarkModeIcon/>}</span>
      </div>
    </nav>
    <div className='opening'>
     
      <div className="gridSpace"><GridIcons/></div>
      
      <div className="skillsHeading">Skills.</div>
      
    </div>
      
    </div>
  );
};

export default AboutMe;
