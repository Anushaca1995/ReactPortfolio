import "./Projects.scss";
import calc from "../../images/projects/calc.png";
import client from "../../images/projects/client.png";
import mct from "../../images/projects/mct.png";
import punk from "../../images/projects/punk.png";
import ticket from "../../images/projects/ticket.png";
const Projects = () =>{
    return( <div className="project" id="projectid">
    <h4>Projects</h4>
    <div class="container">
                <h5 class="pro-head">Client Project</h5>
                <a target="_blank" href="https://quadra-client-project.web.app/">
                    <img class="pro-image" src={client}></img>
                </a>
    </div>
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
        </div>)
}
export default Projects;