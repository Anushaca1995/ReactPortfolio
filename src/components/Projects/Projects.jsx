import "./Projects.scss";
import calc from "../../images/projects/calc.png";
import weather from "../../images/projects/weather1.jpg";
import purplestar from "../../images/projects/purplestar.jpeg";
import mct from "../../images/projects/mct.png";
import punk from "../../images/projects/punk.png";
import ticket from "../../images/projects/ticket.png";
const Projects = () =>{
    return( <div className="project" id="projectid">
    <h4>Personal Projects</h4>
    <p className="pro-text">Please click on the project images to visit the GitHub pages and explore the development details of the apps.</p>
    {/* <div class="container">
                <h5 class="pro-head">Client Project</h5>
                <a target="_blank" href="https://quadra-client-project.web.app/">
                    <img class="pro-image" src={client}></img>
                </a>
    </div> */}
    <div class="container">
                <h5 class="pro-head">React Native Projects</h5>
    <div class="pro__container">
            <div class="container">
                <h5 class="pro-head">Weather App</h5>
                <a target="_blank" href="https://github.com/Anushaca1995/WeatherApp/">
                    <img class="weather-image" src={weather}></img>
                </a>
            </div>  
            <div class="container">
                <h5 class="pro-head">Purple Star</h5>
                <a target="_blank" href="https://github.com/Anushaca1995/PurpleStar">
                    <img class="pro-image" src={purplestar}></img>
                </a>
            </div>  
        </div>
        </div>
    <div class="container">
                <h5 class="pro-head">Web Projects</h5>
    <div class="pro__container">
            <div class="container">
                <h5 class="pro-head">Calculator</h5>
                <a target="_blank" href="https://anushaca1995.github.io/Calculator/">
                    <img class="pro-image" src={calc}></img>
                </a>
            </div>
            <div class="container">
                <h5 class="pro-head">Morse Code Tracker</h5>
                <a target="_blank" href="https://anushaca1995.github.io/Morse-code-Translator/">
                    <img class="pro-image" src={mct}></img>
                </a>
            </div>
            <div class="container">
                <h5 class="pro-head">Ticket Translator</h5>
                <a target="_blank" href="https://github.io/Anushaca1995/Ticket_Tracker/">
                    <img class="pro-image" src={ticket}></img>
                </a>
            </div>
            <div class="container">
                <h5 class="pro-head">Punk API</h5>
                <a target="_blank" href="https://github.io/Anushaca1995/Punk-API//">
                    <img class="pro-image" src={punk}></img>
                </a>
            </div>
        </div>
        </div>
        </div>)
}
export default Projects;