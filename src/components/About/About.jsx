import "./About.scss";
import resume from "../../resources/AnushaCV.pdf";
const About = () => {
    return (<div >
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h4 className="about-head">About</h4>
        <p className="about-text">Hello,   I am Anusha Antony.

        I'm a skilled React Native Developer with over two years of hands-on experience crafting both iOS and Android apps. My expertise spans across JavaScript, TypeScript, and a range of popular frameworks like React and Spring Boot. I enjoy working closely with UI/UX designers and backend teams to create seamless and secure user experiences. From integrating secure authentication systems to optimizing state management, I’m passionate about solving complex problems and staying up-to-date with the latest tech trends. I'm known for my strong communication skills, attention to detail, and a commitment to delivering high-quality apps. Always eager to learn and grow, I thrive in collaborative environments where I can contribute to meaningful projects.
        </p>
        <p className="about-text"> Please click below 👇 to view my Resume </p><a class="about__resume" href={resume}>Resume</a>
    </div>)
}
export default About;