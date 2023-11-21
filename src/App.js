import logo from './logo.svg';
import './App.css';
import AboutMe from './components/Aboutme/Aboutme';
import { Projects } from './components/Projects/Projects';
import { ContactPage } from './components/contactPage/Contact';
import { AllProjects } from './components/ProjectsPage/ProjectsPage';
import { Route, Routes } from 'react-router';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='App'>

      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/allprojects" element={<AllProjects />} />
      </Routes>
      
     


     


      
    </div>
  );
}

export default App;
