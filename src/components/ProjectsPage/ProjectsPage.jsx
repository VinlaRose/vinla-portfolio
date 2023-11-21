
import { ProjectBox } from "../ProjectBox/ProjectBox"
import { ProjectBoxBackend } from "../ProjectBox/ProjectBoxBackend"
import "./ProjectsPage.css"
export const AllProjects = () => {

    const allProjects = [
        {
            name: "Video Library",
            description: "A webapp  for videos streaming",
            skills: ["ReactJS", "React Router"],
            githubLink: "https://github.com/VinlaRose/vinla-mcr-11",
            liveLink: "https://vinla-mcr-11-jq24a55gr-vinlarose.vercel.app/"
        },
        {
            name: "React Component Library",
            description: "Reausable, Simple, frequently used React UI components.",
            skills: ["ReactJS", "React Router"],
            githubLink: "https://github.com/VinlaRose/react-component-library-vin",
            liveLink: "https://react-component-library-vin.vercel.app/"
        },
        {
            name: "Income Tracker",
            description: "A webapp  tracking your daily expenses",
            skills: ["ReactJS", "React Router", "REDUX"],
            githubLink: "https://github.com/VinlaRose/income-tracker",
            liveLink: "https://income-tracker-psi.vercel.app/"
        },
        {
            name: "Habit Tracker",
            description: "Track your habits, add a new habit, edit, delete or archive.",
            skills: ["ReactJS", "React Router"],
            githubLink: "https://github.com/VinlaRose/vinla-mcr-2",
            liveLink: "https://vinla-mcr-2.vercel.app/"
        },
        {
            name: "Books Management",
            description: "A webapp to arrange your books into different categories",
            skills: ["ReactJS", "React Router"],
            githubLink: "https://github.com/VinlaRose/vinla-mcr-1",
            liveLink: "https://vinla-mcr-1.vercel.app/"
        },
        {
            name: "Trip Advisor",
            description: "A webapp  for videos streaming",
            skills: ["ReactJS", "React Router"],
            githubLink: "https://github.com/VinlaRose/vinla-mcr-7",
            liveLink: "https://vinla-mcr-7.vercel.app/"
        },
        {
            name: "Recipe Diary",
            description: "Have a new recipe? Save it here.",
            skills: ["ReactJS", "React Router"],
            githubLink: "https://github.com/VinlaRose/vinla-mcr-5",
            liveLink: "https://vinla-mcr-5.vercel.app/"
        },
        {
            name: "Previous Portfolio",
            description: "My first portolio",
            skills: ["Vanilla JS", "HTML", "CSS"],
            githubLink: "https://github.com/VinlaRose/Portfolio",
            liveLink: "https://vinla.netlify.app/"
        },
        
      
    ]

    const allBEProjects = [
        {
            name: "API for Restaurant Management",
            description: "A backend API for a restaurant discovery platform similar to Zomato. ",
            skills: ["MongoDB", "Mongoose", "ExpressJS", "NodeJS"],
            replLink: "https://replit.com/@VinlaRose/Assignment-11#index.js",
            documentation: "https://documenter.getpostman.com/view/28554048/2s9YCASWPJ"
        }, 
        {
            name: "API for Travel Recommendation",
            description: "A TripAdvisor-like Travel Recommendation API ",
            skills: ["MongoDB", "Mongoose", "ExpressJS", "NodeJS"],
            replLink: "https://replit.com/@VinlaRose/Travel-Recommendation-API-vinla#index.js",
            documentation: "https://documenter.getpostman.com/view/28554048/2s9YJZ55H1"
        },

        {
            name: "User Authentication API",
            description: "This API provides a set of features for user management, including user signup, login, password change etc. ",
            skills: ["MongoDB", "Mongoose", "ExpressJS", "NodeJS"],
            replLink: "https://replit.com/@VinlaRose/Travel-Recommendation-API-vinla#index.js",
            documentation: "https://documenter.getpostman.com/view/28554048/2s9YJZ4k6j"
        },
    ]
    return(
        <div className="all-projects-page">
            <div className="into-box-shadow">
            <div className="intro-box-projects">
            <h1>Mini Projects.</h1>
            <p>Here are some of my projects that I did as a part of my learning with neog camp. Building them helped me develop my concepts one at a time. </p>
        </div>
            </div>
        
        <div className="projects-list">
        {
                allBEProjects.map(project => (<ProjectBoxBackend project = {project}/>))
            }
            {
                allProjects.map(project => (<ProjectBox project = {project}/>))
            }
            
        </div>
        </div>
    )
}