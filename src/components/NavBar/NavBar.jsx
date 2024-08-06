import "./NavBar.scss";
import { Link } from "react-router-dom";


const NavBar = () => {
    
    return (<div className="navBar">
        <Link className="navBar__logo" to={"*"}>Anusha</Link>
        <Link className="navBar__skills" to={"/skills"}>
            Skills
        </Link>
        <Link className="navBar__project" to={"/projects"}>
            Projects
        </Link>
        <Link className="navBar__about" to={"/about"}>
            About
        </Link>
        <Link className="navBar__getInTouch" to={"/getInTouch"}>
            Get In Touch
        </Link>
    </div>)
};

export default NavBar;