import Navguide from "./Navguide";
import signature from "./Resources/signature.png";
import "./Styles/Navbar.css"

function Navbar(goToIntro) {
    return ( 
        <div className="navbar">
            <img src={signature} className = "navbar-logo"/>
        </div>

     );
}

export default Navbar;