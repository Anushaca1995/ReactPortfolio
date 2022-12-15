import "./NavBar.scss";


const NavBar = () => {
    return (<div className="navBar">
        <p className="navBar__logo">Anusha</p>
        <a className="navBar__skills">
            Skills
        </a>
        <a className="navBar__project">
            Projects
        </a>
        <a className="navBar__about">
            About
        </a>
        <a className="navBar__getintouch">
            Get In Touch
        </a>
    </div>)
};

export default NavBar;