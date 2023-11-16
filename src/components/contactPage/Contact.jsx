import { HelloPhoto } from "../HelloPhoto/HelloPhot"
import "./Contact.css"
import vinlaPic from "../../assets/profile.jpg"

export const ContactPage = () => {
    return(
        <div id="connect" className="contactPage">
            <div className="flipCardRing">
            <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-back">
      <img className="profileImage" src={vinlaPic} alt="Avatar" />
    </div>
    <div className="flip-card-front">
      <h1 className="name-head">Vinla Rose</h1>
      <p className="name-job">Frontend Engineer</p>
      
    </div>
  </div>
</div>
            </div>
             
            <HelloPhoto/>
           
        </div>
    )
}