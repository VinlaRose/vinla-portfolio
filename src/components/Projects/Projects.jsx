
import BoxWithDots from "../BoxWithDots/BoxWithDots"
import "./Project.css"
export const Projects = () => {
    return(
        <div className="project-page">
            <div className="item-a">
           <h1 className="project-heading">Projects.</h1>
            </div>
            <div className="item-b">
            <BoxWithDots title={"Social Media App"}
            description={"A social media app having features like posting, editing post deleting, follow/unfollow, edit profile,login, signin features made using ReactJS."}/>
            </div>
            <div className="item-c">
            <BoxWithDots title={"Ecom App"}
            description={"A website for a furniture store including features like  filterling, sorting, cart, wishlist , payment etc."}/>
            </div>
            <div className="item-d">
            
            <div class = "buttonProjectShadow">
            <div class="buttonProject" >See All Projects..  </div>
            </div>
            </div>
           
        </div>
    )
}