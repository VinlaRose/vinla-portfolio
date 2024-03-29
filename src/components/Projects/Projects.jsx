
import {  useNavigate } from "react-router"
import BoxWithDots from "../BoxWithDots/BoxWithDots"
import "./Project.css"

export const Projects = () => {
    const navigate = useNavigate()
    return(
        <div id="projects" className="project-page" >
            <div className="item-a">
           <h1 className="project-heading">Projects.</h1>
            </div>
            <div className="item-b">
            <BoxWithDots title={"Social Media App"}
            description={"A social media app having features like jwt authentication, posting, editing post deleting, follow/unfollow, edit profile,login, signin features made using ReactJS."} githubLink={"https://github.com/VinlaRose/social-media-react"} projectLink={"https://slaybook-vin.netlify.app/"}/>
            </div>
            <div className="item-c">
            <BoxWithDots title={"Ecom App"}
            description={"A website for a furniture store including features like jwt authentication, filterling, sorting, cart, wishlist , payment etc."} githubLink={"https://github.com/VinlaRose/ecom-backend"} projectLink={"https://furnish-vin.netlify.app/"}/>
            </div>
            <div className="item-d">
            
            <div class = "buttonProjectShadow">
            
            <div class="buttonProject" onClick={() => navigate("/allprojects")}  >See All Projects... </div>
            </div>
            </div>
            <div className="item-e">
            <BoxWithDots title={"Data Visualization App"}
            description={"This React website integrates an API layer and Data Pipeline for Google Sheets data, displaying it through bar graphs and line charts. A Cookie Management System stores user preferences, automatically applied upon revisiting. Users can reset preferences, and a shareable charts feature generates URLs for collaboration. "} githubLink={"https://github.com/VinlaRose/data-visualization-assignment-"} projectLink={"https://data-visualization-assignment.vercel.app/"}/>
            </div>
           
        </div>
    )
}