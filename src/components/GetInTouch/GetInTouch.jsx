import "./GetInTouch.scss";
import mail from "../../images/mail.png";

const GetInTouch = () => {
    return (<div class="getintouch" id="getintouch">
        <h4>Get In Touch</h4>
        <div class="flex-container">
            <a target="_blank" href="https://www.linkedin.com/in/anusha-antony27/">
                <img className="flex-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain-wordmark.svg" />
            </a>
            <a target="_blank" href="https://github.com/Anushaca1995/">
                <img className="flex-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </a>
            <a target="_blank" href="mailto:anushaca1995@gmail.com?subject=Mail from Portfolio">
                <img class="flex-item" src={mail}></img>
            </a>
        </div>

    </div>)

}
export default GetInTouch;