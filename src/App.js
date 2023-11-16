import logo from './logo.svg';
import './App.css';
import AboutMe from './components/Aboutme/Aboutme';
import { Projects } from './components/Projects/Projects';
import { ContactPage } from './components/contactPage/Contact';

function App() {
  return (
    <div className='App'>
      
      <AboutMe/>
      <Projects />
      <ContactPage/>
      
    </div>
  );
}

export default App;
