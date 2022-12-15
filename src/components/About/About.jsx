import "./About.scss";
import resume from "../../resources/AnushaResume.doc";
const About =()=>{
    return(<div class="about" id="about">
    <p>Hello, <br></br>I am Anusha Antony.

        A junior software developer trainee specializing in Java Script, React, Java, HTML, SCSS. I have hands-on experience in tools such as Postman, Figma, Trello, VSCode and IntelliJ.
        
        I have 2 years of work experience at 4W Technologies Ltd, Chennai, India as an Cache developer.
        
        I am currently doing _nology 12 weeks training for HTML, CSS, SCSS, JS, REACT, JAVA and Spring which is full-stack development. I worked with client-based project using React and followed Agile methodology for development process.
    </p>
    <a class="about__resume" href={resume}>Resume</a>
</div>)
}
export default About;