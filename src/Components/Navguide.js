import { useState } from "react";
import "./Styles/Navguide.css"

function Navguide(props) {
    const [hidden, sethidden] = useState(false)
    return ( 
        <div className={hidden ? "hide" : "show"}>
            list of stuff
        </div>
     );
}

export default Navguide;