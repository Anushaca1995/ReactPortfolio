import "./About.scss";
import resume from "../../resources/AnushaResume.doc";
const About = () => {
    return (<div >
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h4 className="about-head">About</h4>
        <p className="about-text">Hello,   I am Anusha Antony.

            A junior software developer specializing in Java Script, React, Java, HTML, SCSS. I have hands-on experience in tools such as Postman, Figma, Trello, VSCode and IntelliJ.

            I have 2 years of work experience at 4W Technologies Ltd, Chennai, India as an Cache developer.

            I have completed 12 weeks training at _nology for HTML, CSS, SCSS, JS, REACT, JAVA and Spring which is full-stack development. I worked with client-based project using React and followed Agile methodology for development process.
        </p>
        <p className="about-text"> Please click below 👇 to view my Resume </p><a class="about__resume" href={resume}>Resume</a>
    </div>)
}
export default About;